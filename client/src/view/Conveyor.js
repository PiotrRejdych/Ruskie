import {FoodItem} from "./FoodItem";

export class Conveyor extends Phaser.Group {
	constructor(game, x, y) {
		super(game);

		this.x = x;
		this.y = y;

		this.backgroundImage = this.game.add.sprite(this.x, this.y, 'conveyorBelt');
		this.backgroundImage.scale.setTo(0.3, 0.3);

		this.conveyorWidth = this.backgroundImage.width;
		this.conveyorHeight = this.backgroundImage.height;

		this.spawnReady = true;

		this.food = this.game.add.group();
		this.food.add(this.game.world.add(new FoodItem(game, this.x + this.conveyorWidth/2, this.y, this.conveyorHeight, 'dumpling1')));
	}

	update() {
		if(this.spawnReady){
            this.food.add(this.game.world.add(new FoodItem(this.game, this.x + this.conveyorWidth/2, this.y, this.conveyorHeight, 'dumpling1')));
            this.spawnReady = false;
            let timer = this.game.time.create(this.game, true);
            timer.add(1000,this.setSpawnReadyTrue, this);
            timer.start();
		}
	}

	setSpawnReadyTrue(){
		this.spawnReady = true;
	}

}