import * as PIXI from "pixi.js"

//import sprites and textures
import logSprite from "./images/Boekje.png"
import bgImage from "./images/background farm.png"
import bgImageField from "./images/background field.png"
import bgImageStart from "./images/startmenu.png"
import startImage from "./images/start knop.png"
import buttonLog from "./images/knop_boekje.png"
import buttonMoestuin from "./images/knop_moestuin.png"
import buttonEnvironment from "./images/knop_omgeving.png" 
import plant1 from "./images/paardenbloem.png"
import plant2 from "./images/tulp.png"
import plant3 from "./images/viooltjes.png"
import plant4 from "./images/zonnebloem.png"
import plant5 from "./images/munt.png"
import pot from "./images/potje.png"
import next from "./images/arrow_right.png"
import previous from "./images/arrow_left.png"
import music from "url:./sound/music.mp3"
import clickSound from "url:./sound/click.wav"
import bee from "./images/bee.png"

//import classes
import { Log } from './Log'
import { Menu } from './Menu'
import { Farm } from './Farm'
import { LogButton } from './LogButton'
import { MoestuinButton as MoestuinButton } from './moestuinButton'
import { EnvironmentButton as EnvironmentButton } from './environmentButton'
import { StartKnop } from './startKnop'
import { Environment } from './environment'
import { Plant } from './Plant'
import { Pot } from './Pot'
import { arrowNext as ArrowNext } from './arrowNext'
import { arrowPrevious as ArrowPrevious } from './arrowPrevious'
import { Bee } from "./beeEvent"

export class Game {

    pixi: PIXI.Application
    loader: PIXI.Loader
    public log: Log
    private menu: Menu
    private startKnop: StartKnop
    private farm: Farm
    private environment: Environment
    public plant: Plant
    private pot: Pot
    private planten: Plant[] = []
    private pots: Pot[] = []
    private logButton: LogButton
    private moestuinButton: MoestuinButton
    private environmentButton: EnvironmentButton
    public arrowPrevious: ArrowPrevious
    public arrowNext: ArrowNext
    public Bees: Bee[] = []


    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("logTexture", logSprite)
            .add("backgroundTexture", bgImage)
            .add("backgroundTexture2", bgImageStart)
            .add("backgroundTexture3", bgImageField)
            .add("startButton", startImage)
            .add("logButtonTexture", buttonLog)
            .add("moestuinButtonTexture", buttonMoestuin)
            .add("environmentButtonTexture", buttonEnvironment)
            .add('plant1', plant1)
            .add('plant2', plant2)
            .add('plant3', plant3)
            .add('plant4', plant4)
            .add('plant5', plant5)
            .add('potTexture', pot)
            .add('nextButtonTexture', next)
            .add('previousButtonTexture', previous)
            .add("music", music)
            .add('clickSound', clickSound)
            .add('Bee', bee)
        
        // temporary default values until sprites are loaded,
        // this prevents a lot of checks for undefiend later in the game
        this.log = new Log(undefined, this);
        this.menu = new Menu(undefined, this);
        this.startKnop = new StartKnop(undefined, this, document.createElement("audio"));
        this.farm = new Farm(undefined, this);
        this.environment = new Environment(undefined, this);
        this.plant = new Plant(undefined, this, 0, 0, "dummy");
        this.pot = new Pot(undefined, this, 0, 0, 0);
        this.logButton = new LogButton(undefined, this, document.createElement("audio"));
        this.moestuinButton = new MoestuinButton(undefined, this, document.createElement("audio"));
        this.environmentButton = new EnvironmentButton(undefined, this, document.createElement("audio"));
        this.arrowPrevious = new ArrowPrevious(undefined, this);
        this.arrowNext = new ArrowNext(undefined, this);
        
    this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")
        //load initial load screen

        this.menu = new Menu(this.loader.resources["backgroundTexture2"].texture, this)
        this.pixi.stage.addChild(this.menu)

        this.startKnop = new StartKnop(this.loader.resources["startButton"].texture, this, this.loader.resources["clickSound"].data )
        this.pixi.stage.addChild(this.startKnop)

        //load textures that are to be eventually used

        this.farm = new Farm(this.loader.resources["backgroundTexture"].texture, this)

        this.logButton = new LogButton(this.loader.resources["logButtonTexture"].texture, this,this.loader.resources["clickSound"].data!)

        this.moestuinButton = new MoestuinButton(this.loader.resources["moestuinButtonTexture"].texture, this,this.loader.resources["clickSound"].data!)

        this.environmentButton = new EnvironmentButton(this.loader.resources["environmentButtonTexture"].texture, this,this.loader.resources["clickSound"].data!)

        this.log = new Log(this.loader.resources["logTexture"].texture, this)
        this.arrowNext = new ArrowNext(this.loader.resources['nextButtonTexture'].texture, this)
        this.arrowPrevious = new ArrowPrevious(this.loader.resources['previousButtonTexture'].texture, this)

        this.environment = new Environment(this.loader.resources["backgroundTexture3"].texture, this)

        //load the amount of plants we currently have
        for (let i = 0; i < 5; i++) {
            //makes sure everything isn't exactly straight
            let x = 25 + (150 * i);
            let y = 235
            //if the i value of the plant is not divisible by 2 (uneven) move the plant a bit higher up
            if (i % 2 != 0) {
                y = 200
            }
            //this makes sure we get the actual names of the plants right
            let plantTexture = "plant" + (i+1)
            let plant = new Plant(this.loader.resources[plantTexture].texture, this, x, y, plantTexture)
            //add plants to the array
            this.planten.push(plant)
        }

        //same stuff here except its pots
        for (let i = 0; i < 5; i++) {
            let x = 25 + (150 * i);
            let y = 225
            if (i % 2 != 0) {
                y = 325
            }
            //as all pots are the same we don't need a name for the pots
            let pot = new Pot(this.loader.resources["potTexture"].texture, this, x, y, i)
            this.pots.push(pot)
        }

        //start gameloop
        
        this.pixi.ticker.add((delta) => this.update(delta))
        let music = this.loader.resources["music"].data
        music.play();
    }

    update(delta: number) {
        
        for (const bee of this.Bees) {
            bee.swim()
             }
    }

    //adds a plant to the array in Log.ts
    addPlantToLog(planNum: number) {
        this.log.addPlantToLog(this.planten[planNum]);
    }

    //loads log and navigation arrows
    loadLog() {
        this.pixi.stage.addChild(this.log)
        this.pixi.stage.addChild(this.arrowNext)
        this.pixi.stage.addChild(this.arrowPrevious)
        this.log.getPage();
        console.log("Log loaded")
    }

    //unloads log and navigation arrows
    unLoadLog() {
        this.pixi.stage.removeChild(this.log)
        this.pixi.stage.removeChild(this.arrowNext)
        this.pixi.stage.removeChild(this.arrowPrevious)
        //makes sure to get the correct text object
        let a = this.log.getText();
        this.pixi.stage.removeChild(a);
        console.log("Log loaded")
    }

    //navigates to the next page
    nextPage() {
        this.log.nextPage();
    }

    //navigates to the previous page
    previousPage() {
        this.log.previousPage();
    }

    //loads farm stage
    loadFarmStage() {
        this.pixi.stage.addChild(this.farm);
        this.pixi.stage.addChild(this.logButton)
        this.pixi.stage.addChild(this.moestuinButton)
        this.pixi.stage.addChild(this.environmentButton)
        //loads pots out of the array
        for (let i = 0; i < this.pots.length; i++) {
            const pot = this.pots[i];
            this.pixi.stage.addChild(pot)
            if (pot.plant !== undefined) {
                this.pixi.stage.addChild(pot.plant);
            }
        }
        console.log("Farm stage loaded")
    }

    //loads environment stage
    loadEnvironmentStage() {
        this.pixi.stage.addChild(this.environment)
        this.pixi.stage.addChild(this.logButton)
        this.pixi.stage.addChild(this.moestuinButton)
        this.pixi.stage.addChild(this.environmentButton)
        //loads plants out of the array
        // loop through all plants
        for(let i = 0; i < this.planten.length; i++) {
            const plant = this.planten[i];
            // variable to track if current plant is in moestuin
            let inMoestuin = false;
            
            // look through all pots
            for (const pot of this.pots) {
                if (pot.plant === plant) {
                    // plant is already in a pot,
                    // and therefor in moestuin
                    inMoestuin = true;
                }
            }
            
            // only add plant to environment if it
            // is not already in moestuin
            if (!inMoestuin) {
                this.pixi.stage.addChild(plant);
            }
        }
        console.log("Environment stage loaded")
    }

    //destroys all current children on the stage
    destroyChildren() {
        //for (let i = 0; i < this.pixi.stage.children.length; i++) {
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //    this.pixi.stage.removeChild(this.pixi.stage.children[i])
        //}

        while (this.pixi.stage.children.length > 0) {
            this.pixi.stage.removeChild(this.pixi.stage.children[0]);
        }
    }
    //Make an easier randomised integer function, call this if you need a random integer
    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    addPlantToPot(a: number) {
        if (this.log.getPlantArray()[0] != undefined) {
            this.pots[a].addPlant(this.log.getCurrentPlant())
        }
    }

    removePlantFromLog(a: Plant) {
        this.log.removePlantFromLog(a);
        console.log(`plant ${a} has been removed`)
    }
    
}
//starts the game
new Game()