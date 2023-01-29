
import * as PIXI from 'pixi.js';                                                // Import PIXI

import background from "../../images/background.jpg";                           // Import Images
import movement from "../../images/menu_movement.jpg";
import collision from "../../images/menu_collision.jpg";
import audio from "../../images/menu_audio.jpg";

export class App{
    private pixiWidth = 800;                                                                      //Variablen, public en private
    private pixiHeight = 450;
    private pixi : PIXI.Application;
    private loader : PIXI.Loader;

    constructor() {
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight});        //maak nieuwe stage
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();                                                           //maak nieuwe loader
        this.loader
            .add('backgroundTexture', background)
            .add('movementTexture', movement)
            .add('collisionTexture', collision)
            .add('audioTexture', audio)
        this.loader.load(()=>this.loadCompleted());
    }

    private loadCompleted(){                                                                    //menu opmaak, objecten inladen

        let background = new PIXI.Sprite(this.loader.resources['backgroundTexture'].texture!);      //achtergrond inladen
        this.pixi.stage.addChild(background);
        background.width = 800;
        background.height = 450;

        let movementProto = new PIXI.Sprite(this.loader.resources['movementTexture'].texture!);         //movement prototype knop inladen
        this.pixi.stage.addChild(movementProto);
        movementProto.interactive = true;
        movementProto.buttonMode = true;
        movementProto.on('pointerdown', this.movementProtoPlay);
        movementProto.anchor.set(0.5);
        movementProto.y = 130;
        movementProto.x = 400;

        let collisionProto = new PIXI.Sprite(this.loader.resources['collisionTexture'].texture!);       //collision prototype knop inladen
        this.pixi.stage.addChild(collisionProto);
        collisionProto.interactive = true;
        collisionProto.buttonMode = true;
        collisionProto.on('pointerdown', this.collisionProtoPlay);
        collisionProto.anchor.set(0.5);
        collisionProto.y = 210;
        collisionProto.x = 400;

        let audioProto = new PIXI.Sprite(this.loader.resources['audioTexture'].texture!);               //audio prototype knop inladen
        this.pixi.stage.addChild(audioProto);
        audioProto.interactive = true;
        audioProto.buttonMode = true;
        audioProto.on('pointerdown', this.audioProtoPlay);
        audioProto.anchor.set(0.5);
        audioProto.y = 290;
        audioProto.x = 400;

    }

    private movementProtoPlay(){
        window.location.href="movement.html";                                           //linken van visuele knoppen aan links naar prototypes
    }

    private collisionProtoPlay(){
        window.location.href="collision.html";
    }

    private audioProtoPlay(){
        window.location.href="audio.html";
    }

}

new App();