// Import PIXI
import * as PIXI from 'pixi.js';

export class Coin extends PIXI.Sprite{

    constructor(texture: PIXI.Texture){
        super(texture);

        // Setting the width & height
        this.width = 17;
        this.height = 15;
    }
}