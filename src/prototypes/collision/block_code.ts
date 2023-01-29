import * as PIXI from 'pixi.js';                                // Import PIXI

export class Block extends PIXI.Sprite{

    constructor(texture: PIXI.Texture){
        super(texture);

        this.x = 350;                                           //start positie block
        this.y = 130;

        this.width = 70;                                        // width & height block
        this.height = 72;
    }
}