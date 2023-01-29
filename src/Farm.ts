import * as PIXI from 'pixi.js'
import { Game } from './game'
import { Plant } from './plant'

export class Farm extends PIXI.Sprite {

    game: Game
    plants: Plant[] = [];

    constructor(texture: PIXI.Texture | undefined, game: Game) {
        super(texture)
        this.game = game
    }
}
