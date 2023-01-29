import * as PIXI from 'pixi.js';                                                        // Import PIXI

import soundWalk from 'url:../../sound/walk_sound.wav';                             //Import Audio files
import soundJump from 'url:../../sound/jump_sound.wav';
import soundInjury from 'url:../../sound/injury_sound.wav'; 
import soundFall from 'url:../../sound/fall_sound.wav';

export class Char extends PIXI.Sprite {                         //Variablen, public en private
    public xspeed = 0;
    public yspeed = 2;

    private walkLeft = false;
    private walkRight = false;
    private walkLeftStop = false;
    private walkRightStop = false;
    private weight = 0.5;
    
    private walkSound: HTMLAudioElement = new Audio(soundWalk);                     //audiofiles worden gekoppeld aan variablen
    private jumpSound: HTMLAudioElement = new Audio(soundJump);
    private injurySound: HTMLAudioElement = new Audio(soundInjury);
    private fallSound: HTMLAudioElement = new Audio(soundFall);

    constructor(texture: PIXI.Texture){                     //maak character                    
        super(texture);
        this.anchor.set(0);

        this.width = 50;                                    //breedte en lengte van character
        this.height = 70;

        this.x = 350;                                       //startpositie wanneer level geladen wordt
        this.y = 10;

        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));          //koppel functies aan toetsen
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));

    }

    private resetPosition() {                                                           //respawn locatie voor character
        this.x = 350;
        this.y = 50;
    }

    public update(delta: number) {
        this.x += delta * this.xspeed;                                                  //loopsnelheid character
        this.y += delta * this.yspeed;

        this.yspeed += this.weight;                                                     //zwaartekracht voor character

        if(this.walkLeft === true){                                                     //functie aan beweging door het level koppellen
            this.xspeed = -5;
        }
        if(this.walkRight === true){
            this.xspeed = 5;
        }
        if(this.walkLeft === false && this.walkRight === false){                        //geen beweging
            this.xspeed = 0;
        }
        if(this.y > 500){                                                               //functie voor wanneer character van het scherm afvalt, met geluid
            this.resetPosition();
            this.fallSound.play();
        }
    }

   public collisionTop(object: PIXI.Sprite) {                                  
        if(this.x > object.x + object.width || this.x + this.width < object.x || this.y > object.y + object.height || this.y + this.height < object.y){

            return false;                                                              //geen return wanneer character nergens op staat
        } else {

            return true;                                                               //return wanneer character ergens op staat
        }
    }
    public collisionBottom(object: PIXI.Sprite) {
        if(this.y + this.height > object.y && this.y < object.y + object.height){                        //check voor potentiele collision tussen character en object
                                                                                                   //door gebruik te maken van de hoogte coordinaten van character en object

            if(this.x + this.width > object.x && this.x < object.x + object.width){                //hetzelfde wordt gedaan met de horizontale coordinaat. 
            this.yspeed = 2;    
            this.injurySound.play();                                                                    //bij collision speel geluid              
            }                                                                                                   
        }
    }
    public collisionHorizontal(object: PIXI.Sprite){
        if(this.x + this.width >= object.x && this.x + this.width < object.x + object.width){               //check voor potentiele collision tussen character en object
                                                                                                            //door gebruik te maken van de horizontale coordinaten van character en object
           
            if(this.y === object.y || this.y - this.height + 5 < object.y && this.y > object.y - object.height){  //als er iets staat, stopt character met verder naar rechts te bewegen
                this.walkRightStop = true;
                this.walkRight = false;
                this.x = object.x - this.width - 1;
            }
        } else {
            this.walkRightStop = false;                                                                     //als dit allemaal niet het geval is kan character doorlopen
        }
        
        if(this.x <= object.x + object.width && this.x > object.x){                                         //hetzelfde wordt gedaan als links(zie uitleg vanaf regel 70)
            if(this.y === object.y || this.y - this.height + 5 < object.y && this.y > object.y - object.height){
                this.walkLeftStop = true;
                this.walkLeft = false;
                this.x = object.x + object.width + 1;
            }
        } else {
            this.walkLeftStop = false;
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        if(e.key === " " || e.key === "ArrowUp" || e.key === "w"){                      //character kan springen wanneer character ergens op staat
            if(this.yspeed === 0){                                                      //character kan springen door: space of w te drukken, maakt een geluid
                this.yspeed = -10;
                this.jumpSound.play();
            }
        }


        switch (e.key.toUpperCase()) {                                          //koppel toetsen a en d aan beweging, zolang er niks in de weg staat.
            case "A":
            case "ARROWLEFT":
                if(!this.walkLeftStop){
                    this.walkLeft = true
                    this.walkSound.play();                                  //geluid aan lopen gekoppeld
                }
                break;
            case "D":
            case "ARROWRIGHT":
                if(!this.walkRightStop){
                    this.walkRight = true
                    this.walkSound.play();                                   //geluid aan lopen gekoppeld
                }
                break;
        }
    }
    private onKeyUp(e: KeyboardEvent): void {                               //stoppen wanneer knoppen losgelaten worden.
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.walkLeft = false
                break;
            case "D":
            case "ARROWRIGHT":
                this.walkRight = false
                break;
        }
    }
}
