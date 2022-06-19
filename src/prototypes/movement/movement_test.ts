// Import PIXI
import * as PIXI from 'pixi.js';

// Import Images
import testChar from '../../images/Char1_1.png';
import testBack from '../../images/test_background2.jpg';
import testGround from '../../images/test_ground2.jpg';

// Import Classes
import { Char } from './test_char';
import { Ground } from './test_ground';
import { Background } from './background';

export class Game{
    // Globals
    public pixiWidth = 800;
    public pixiHeight = 450;

    private pixi : PIXI.Application;
    private loader : PIXI.Loader;

    private char : Char;
    private ground : Ground;
    private background : Background;

    constructor(){
        // Create PIXI Stage
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        // Create Loader
        this.loader = new PIXI.Loader();
        this.loader
            .add('charTexture', testChar)
            .add('backgroundTexture', testBack)
            .add('groundTexture', testGround);
        this.loader.load(()=>this.loadCompleted());
    }

    private loadCompleted(){
        // Adding background to game
        this.background = new Background(this.loader.resources["backgroundTexture"].texture!, this.pixiWidth, this.pixiHeight);
        this.pixi.stage.addChild(this.background);

        // Adding ground to game
        this.ground = new Ground(this.loader.resources["groundTexture"].texture!);
        this.pixi.stage.addChild(this.ground);

        // Adding player to game
        this.char = new Char(this.loader.resources["charTexture"].texture!);
        this.pixi.stage.addChild(this.char);

        // Update
        this.pixi.ticker.add((delta) => this.update(delta));
    }

    private update(delta: number){
        // Update player
        this.char.update(delta);

        // Vertical collision player with ground
        if(this.char.collisionVerticalTop(this.ground) && this.char.y + this.char.height < this.ground.y + this.char.yspeed){
            this.char.y = this.ground.y - this.char.height;
            this.char.yspeed = 0;
        }
    }
}

new Game();