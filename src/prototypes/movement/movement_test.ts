import * as PIXI from 'pixi.js';
import testChar from '../../images/Char1_1.png';
import testBack from '../../images/test_background2.jpg';
import testGround from '../../images/test_ground2.jpg';

import { Char } from './test_char';
import { Ground } from './test_ground';
import { Background } from './background';

export class Game{
    pixiWidth = 800;
    pixiHeight = 450;

    pixi : PIXI.Application;
    loader : PIXI.Loader;

    char : Char;
    ground : Ground;
    background : Background;

    constructor(){
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();
        this.loader
            .add('charTexture', testChar)
            .add('backgroundTexture', testBack)
            .add('groundTexture', testGround);
        this.loader.load(()=>this.loadCompleted());
    }

    loadCompleted(){
        this.background = new Background(this.loader.resources["backgroundTexture"].texture!, this.pixiWidth, this.pixiHeight);
        this.pixi.stage.addChild(this.background);

        this.ground = new Ground(this.loader.resources["groundTexture"].texture!);
        this.pixi.stage.addChild(this.ground);

        this.char = new Char(this.loader.resources["charTexture"].texture!);
        this.pixi.stage.addChild(this.char);

        this.pixi.ticker.add((delta) => this.update(delta));
    }

    private update(delta: number){
        this.char.update(delta);

        if(this.char.collisionVerticalTop(this.ground) && this.char.y + this.char.height < this.ground.y + this.char.yspeed){
            this.char.y = this.ground.y - this.char.height;
            this.char.yspeed = 0;
        }
    }
}

new Game();