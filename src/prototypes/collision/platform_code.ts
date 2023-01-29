
import * as PIXI from 'pixi.js';                                    // Import PIXI

export class Platform extends PIXI.Sprite{

    constructor(texture: PIXI.Texture){
        super(texture);

        this.x = 145;                                   //startpositie platform
        this.y = 300;

        this.width = 500;                              //hoogte en breedte van platform
        this.height = 50;
    }
}
