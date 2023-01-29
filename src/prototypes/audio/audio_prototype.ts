
import * as PIXI from 'pixi.js';                                                            // Import PIXI

import imgBack from '../../images/background.jpg';                                          // Import Images
import imgChar from '../../images/Character.png';
import imgPlatform from '../../images/Platform.jpg';
import imgBlock from '../../images/block.jpg';

import music from 'url:../../sound/background_music.wav';                          // Import Audio

import { Background } from './background_code';                                              // Import Classes
import { Char } from './character_code';
import { Platform } from './platform_code';
import { Block } from './block_code';

export class Game{                                                                          //Variablen, public en private
    public pixiWidth = 800;
    public pixiHeight = 500;

    private pixi : PIXI.Application;
    private loader : PIXI.Loader;
    private background : Background;
    private char : Char;
    private platform : Platform;
    private block : Block;
    private backgroundMusic: HTMLAudioElement = new Audio(music);

    constructor(){
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight});        //maak nieuwe stage
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();                                                           //maak nieuwe loader
        this.loader
            .add('backgroundTexture', imgBack)
            .add('charTexture', imgChar)
            .add('platformTexture', imgPlatform)
            .add('blockTexture', imgBlock);
        this.loader.load(()=>this.loadCompleted());
    }

    private loadCompleted(){
        this.backgroundMusic.play();                                                                 //speel muziek en loop de file.
        this.backgroundMusic.addEventListener('ended', function(){
            this.currentTime = 0;
            this.play();
        }, false);


        this.background = new Background(this.loader.resources["backgroundTexture"].texture!, this.pixiWidth, this.pixiHeight);     //toevoeging van: background
        this.pixi.stage.addChild(this.background);

        this.char = new Char(this.loader.resources["charTexture"].texture!);                                                        //toevoeging van:  character
        this.pixi.stage.addChild(this.char);

        this.platform = new Platform(this.loader.resources["platformTexture"].texture!);                                                  //toevoeging van: platform
        this.pixi.stage.addChild(this.platform);

        this.block = new Block(this.loader.resources["blockTexture"].texture!);                                                     //toevoeging van: block
        this.pixi.stage.addChild(this.block);

        this.pixi.ticker.add((delta) => this.update(delta));                                    //update
    }

    private update(delta: number){
        this.char.update(delta);                                                                //update character

        
                                                                                                                                         //collision:

        if(this.char.collisionTop(this.platform) && this.char.y + this.char.height < this.platform.y + this.char.yspeed){            //verticaal,boven met platform
            this.char.y = this.platform.y - this.char.height;
            this.char.yspeed = 0;
        }

        if(this.char.collisionTop(this.block) && this.char.y + this.char.height < this.block.y + this.char.yspeed){              //verticaal met block
            this.char.y = this.block.y - this.char.height;
            this.char.yspeed = 0;
        }

        this.char.collisionHorizontal(this.platform);                                                                                     //horizontaal met block & platform
        this.char.collisionHorizontal(this.block);

        this.char.collisionBottom(this.block);                                                                                  //verticaal, onder met platform
        this.char.collisionBottom(this.platform);
    }
}

new Game();