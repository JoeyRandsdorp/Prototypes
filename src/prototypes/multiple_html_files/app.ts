// Import PIXI
import * as PIXI from 'pixi.js';

// Import Images
import background from "../../images/background.png";
import movement from "../../images/menu_movement.png";
import collision from "../../images/menu_collision.png";
import level from "../../images/menu_level.png";
import coins from "../../images/menu_coins.png";
import controller from "../../images/menu_controller.png";
import audio from "../../images/menu_audio.png";

export class App{
    // Globals
    private pixiWidth = 800;
    private pixiHeight = 450;
    private pixi : PIXI.Application;
    private loader : PIXI.Loader;

    constructor() {
        // Create PIXI Stage
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        // Create Loader
        this.loader = new PIXI.Loader();
        this.loader
            .add('backgroundTexture', background)
            .add('movementTexture', movement)
            .add('collisionTexture', collision)
            .add('audioTexture', audio)
            .add('levelTexture', level)
            .add('coinsTexture', coins)
            .add('controllerTexture', controller);
        this.loader.load(()=>this.loadCompleted());
    }

    private loadCompleted(){
        // Adding background
        let background = new PIXI.Sprite(this.loader.resources['backgroundTexture'].texture!);
        this.pixi.stage.addChild(background);
        background.width = 800;
        background.height = 450;

        // Adding movement-prototype button
        let movementProto = new PIXI.Sprite(this.loader.resources['movementTexture'].texture!);
        this.pixi.stage.addChild(movementProto);
        movementProto.interactive = true;
        movementProto.buttonMode = true;
        movementProto.on('pointerdown', this.movementProtoPlay);
        movementProto.anchor.set(0.5);
        movementProto.y = 32.5;
        movementProto.x = 400;

        // Adding collision-prototype button
        let collisionProto = new PIXI.Sprite(this.loader.resources['collisionTexture'].texture!);
        this.pixi.stage.addChild(collisionProto);
        collisionProto.interactive = true;
        collisionProto.buttonMode = true;
        collisionProto.on('pointerdown', this.collisionProtoPlay);
        collisionProto.anchor.set(0.5);
        collisionProto.y = 110;
        collisionProto.x = 400;

        // Adding audio-prototype button
        let audioProto = new PIXI.Sprite(this.loader.resources['audioTexture'].texture!);
        this.pixi.stage.addChild(audioProto);
        audioProto.interactive = true;
        audioProto.buttonMode = true;
        audioProto.on('pointerdown', this.audioProtoPlay);
        audioProto.anchor.set(0.5);
        audioProto.y = 187.5;
        audioProto.x = 400;

        // Adding level-prototype button
        let levelProto = new PIXI.Sprite(this.loader.resources['levelTexture'].texture!);
        this.pixi.stage.addChild(levelProto);
        levelProto.interactive = true;
        levelProto.buttonMode = true;
        levelProto.on('pointerdown', this.levelProtoPlay);
        levelProto.anchor.set(0.5);
        levelProto.y = 265;
        levelProto.x = 400;

        // Adding coins-prototype button
        let coinsProto = new PIXI.Sprite(this.loader.resources['coinsTexture'].texture!);
        this.pixi.stage.addChild(coinsProto);
        coinsProto.interactive = true;
        coinsProto.buttonMode = true;
        coinsProto.on('pointerdown', this.coinsProtoPlay);
        coinsProto.anchor.set(0.5);
        coinsProto.y = 342.5;
        coinsProto.x = 400;

        // Adding coins-prototype button
        let controllerProto = new PIXI.Sprite(this.loader.resources['controllerTexture'].texture!);
        this.pixi.stage.addChild(controllerProto);
        controllerProto.interactive = true;
        controllerProto.buttonMode = true;
        controllerProto.on('pointerdown', this.controllerProtoPlay);
        controllerProto.anchor.set(0.5);
        controllerProto.y = 420;
        controllerProto.x = 400;
    }

    private movementProtoPlay(){
        window.location.href="movement.html";
    }

    private collisionProtoPlay(){
        window.location.href="collision.html";
    }

    private levelProtoPlay(){
        window.location.href="level.html";
    }

    private audioProtoPlay(){
        window.location.href="audio.html";
    }

    private coinsProtoPlay(){
        window.location.href="coins.html";
    }

    private controllerProtoPlay(){
        window.location.href="controller.html";
    }
}

new App();