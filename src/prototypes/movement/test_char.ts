// Import PIXI
import * as PIXI from 'pixi.js';

export class Char extends PIXI.Sprite {
    // Globals
    public xspeed = 0;
    public yspeed = 3;
    private weigth = 0.3;
    private walkRight = false;
    private walkLeft = false;
    private walkLeftLock = false;
    private walkRightLock = false;

    constructor(texture: PIXI.Texture){
        super(texture);
        this.anchor.set(0);

        // Setting start position
        this.x = 80;
        this.y = 60;

        // Setting width & height
        this.width = 51;
        this.height = 72;

        // Adding event listeners for keyboard
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    public update(delta: number) {
        // player movement & speed
        this.x += delta * this.xspeed;
        this.y += delta * this.yspeed;

        // player gravity
        this.yspeed += this.weigth;

        // Fall offscreen
        if(this.y > 500){
            this.resetPosition();
        }

        // Walk left
        if(this.walkLeft === true){
            this.xspeed = -5;
        }

        // Walk right
        if(this.walkRight === true){
            this.xspeed = 5;
        }

        // Stop walking
        if(this.walkLeft === false && this.walkRight === false){
            this.xspeed = 0;
        }
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

    private resetPosition() {
        // The respawn position of the player
        this.x = 80;
        this.y = 60;
    }

    private onKeyDown(e: KeyboardEvent): void {
        if(e.key === " " || e.key === "ArrowUp" || e.key === "w"){
            if(this.yspeed === 0){
                // The player jumps if the character stands on an object...
                // AND if space, arrow up or W is pressed
                this.yspeed = -9;
            }
        }
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                if(!this.walkLeftLock){
                    // The player walks to the left if the walk left lock is false...
                    // AND the arrow left or A is pressed
                    this.walkLeft = true
                }
                break;
            case "D":
            case "ARROWRIGHT":
                if(!this.walkRightLock){
                    // The player walks to the right if the walk rigth lock is false...
                    // AND the arrow right or D is pressed
                    this.walkRight = true
                }
                break;
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                // The player stops walking to the left if arrow left or A is no longer pressed
                this.walkLeft = false
                break;
            case "D":
            case "ARROWRIGHT":
                // The player stops walking to the right if arrow right or D is no longer pressed
                this.walkRight = false
                break;
        }
    }
}
