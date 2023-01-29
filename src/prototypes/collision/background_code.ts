// Import PIXI
import * as PIXI from 'pixi.js';

export class Background extends PIXI.Sprite{

    constructor(texture: PIXI.Texture, width: number, height: number){
        super(texture);

        this.width = width;                                                      //de instelligen van background worden hier doorgegeven.
        this.height = height;
    }
}