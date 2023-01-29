import * as PIXI from 'pixi.js';                                // Import PIXI

export class Block extends PIXI.Sprite{

    constructor(texture: PIXI.Texture){
        super(texture);

        this.x = 350;                                           // Setting the start position
        this.y = 130;

        this.width = 70;                                        // Setting the width & height
        this.height = 72;
    }
}