import * as PIXI from 'pixi.js'
import { Bee } from './beeEvent'
import { Game } from './game'

export class EnvironmentButton extends PIXI.Sprite {

    game: Game
    private sound: HTMLAudioElement

    constructor(texture: PIXI.Texture | undefined, game:Game, clickSound: HTMLAudioElement) {
        super(texture)
        this.game = game
        this.sound = clickSound
        this.width = 80
        this.height = 77
        this.x = 160
        this.y = 0
        this.interactive = true  // make clickable
        this.buttonMode = true   // show hand cursor
        this.on('pointerdown', () => this.onClick())
    }

    onClick() {
        this.sound.play()
        //destroy all previous loaded content
        this.game.destroyChildren();
        //load new stage
        this.game.loadEnvironmentStage();

        for (let i = 0; i < 14; i++) {
            let bee = new Bee(this.game.loader.resources["Bee"].texture!);
            this.game.pixi.stage.addChild(bee);
            this.game.Bees.push(bee);
            console.log("bijtje")
          }
    }
}