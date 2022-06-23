// Import PIXI
import * as PIXI from 'pixi.js';

// Import controller controls
import { Arcade } from './arcade/arcade';

// Import classes
import { Player } from './player';
import { Ground } from './test_ground';
import { Background } from './background';

// Import Images
import testChar from '../../images/Char1_1.png';
import testBack from '../../images/test_background2.jpg';
import testGround from '../../images/test_ground2.jpg';

export class Game {
    // Globals
    private pixi : PIXI.Application;
    private loader : PIXI.Loader;

    public pixiWidth = 800;
    public pixiHeight = 450;

    public arcade : Arcade;
    private joystickListener : EventListener;

    private player: Player;
    private ground : Ground;
    private background : Background;

    constructor() {
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        // create arcade cabinet with 2 joysticks (with 6 buttons)
        this.arcade = new Arcade(this);

        // Create Loader
        this.loader = new PIXI.Loader();
        this.loader
                .add("playerTexture", testChar)
                .add("backgroundTexture", testBack)
                .add("groundTexture", testGround);
        this.loader.load();
        
        //The game must wait for de joysticks to connect
        console.log("waiting for joysticks to connect");
        this.joystickListener = (e: Event) => this.joyStickFound(e as CustomEvent);
        document.addEventListener("joystickcreated",  this.joystickListener);
    }

    private joyStickFound(e:CustomEvent) {
        let joystick = this.arcade.Joysticks[e.detail];
        
        // debug, this shows you the names of the buttons when they are pressed
        for (const buttonEvent of joystick.ButtonEvents) {
            document.addEventListener(buttonEvent, () => console.log(buttonEvent));
        }

        // Create background
        this.background = new Background(this.loader.resources["backgroundTexture"].texture!, this.pixiWidth, this.pixiHeight);
        this.pixi.stage.addChild(this.background);

        // Create ground
        this.ground = new Ground(this.loader.resources["groundTexture"].texture!);
        this.pixi.stage.addChild(this.ground);

        // Create Player
        this.player = new Player(this.loader.resources["playerTexture"].texture!, joystick);
        this.pixi.stage.addChild(this.player);

        // start pixi
        this.pixi.ticker.add((delta) => this.update())
    }

    update() {
        for (let joystick of this.arcade.Joysticks) {
            joystick.update();
        }

        this.player.update();

        // Vertical collision player with ground
        if(this.player.collisionVerticalTop(this.ground) && this.player.y + this.player.height < this.ground.y + this.player.yspeed){
            this.player.y = this.ground.y - this.player.height;
            this.player.yspeed = 0;
        }
    }

    public disconnect() {
        document.removeEventListener("joystickcreated", this.joystickListener);
    }
}

new Game();