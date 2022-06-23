// Import PIXI
import * as PIXI from 'pixi.js';

// Import controller controls
import { Arcade } from './arcade/arcade';

// Import classes
import { Box } from './box';

export class Game {
    // Globals
    public pixiWidth = 800;
    public pixiHeight = 450;

    public arcade : Arcade;
    private pixi : PIXI.Application;
    private joystickListener : EventListener;
    private box : Box;

    constructor() {
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        // create arcade cabinet with 2 joysticks (with 6 buttons)
        this.arcade = new Arcade(this);
        
        // // The game must wait for de joysticks to connect
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

        // pass to a player class
        this.box = new Box(joystick);
        this.pixi.stage.addChild(this.box);

        // start pixi
        this.pixi.ticker.add((delta) => this.update())
    }

    update() {
        for (let joystick of this.arcade.Joysticks) {
            joystick.update();
        }

        this.box.update();
    }

    public disconnect() {
        document.removeEventListener("joystickcreated", this.joystickListener);
    }
}

new Game();