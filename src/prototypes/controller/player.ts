// Import PIXI
import * as PIXI from 'pixi.js';

// Import controller controls
import { Joystick } from './arcade/joystick';

export class Player extends PIXI.Sprite {
    // Globals
    private joystick : Joystick;

    private xspeed = 5;
    public yspeed = 3;
    private weigth = 0.3;
    
    constructor(texture: PIXI.Texture, joystick: Joystick) {
        super(texture);
        
        // Setting width & height
        this.width = 51;
        this.height = 72;

        // Setting start position
        this.x = 80;
        this.y = 60;

        // Adding event listeners for controller
        this.joystick = joystick;
        document.addEventListener(this.joystick.ButtonEvents[0], () => this.jump());
    }

    private jump(){
        if(this.yspeed === 0){
            // Jump
            this.yspeed = -9;
        }
    }

    public update() {
        // player movement & speed
        this.x += this.joystick.X * this.xspeed;
        this.y += this.yspeed;

        // player gravity
        this.yspeed += this.weigth;

        // Fall offscreen
        if(this.y > 500){
            this.resetPosition();
        }
    }

    private resetPosition() {
        // The respawn position of the player
        this.x = 80;
        this.y = 60;
    }

    public collisionVerticalTop(object: PIXI.Sprite) {
        if(this.x > object.x + object.width || this.x + this.width < object.x || this.y > object.y + object.height || this.y + this.height < object.y){
            // Return false if the player doesn't stand on/in the object
            return false;
        } else {
            // Return true if the player stands on/in the object
            return true;
        }
    }
}