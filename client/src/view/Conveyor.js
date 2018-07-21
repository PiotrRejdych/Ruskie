import {FoodItem} from "./FoodItem";

export class Conveyor extends Phaser.Group {
	constructor(game) {
		super(game);

		this.backgroundImage = this.game.add.sprite(0, 0, 'conveyorBelt');
		this.backgroundImage.scale.setTo(0.3, 0.3);
        this.backgroundImage.pivot.x = this.backgroundImage.width / 2;

        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;

		this.conveyorWidth = this.backgroundImage.width;
		this.conveyorHeight = this.backgroundImage.height;

		this.spawnReady = true;

		this.food = this.game.add.group();
		this.food.add(this.game.world.add(new FoodItem(game, this.conveyorWidth/2, 0, this.conveyorHeight, 'dumpling1')));

		this.add(this.backgroundImage);
		this.add(this.food);
	}

	update() {
		if(this.spawnReady){
            this.food.add(this.game.world.add(new FoodItem(this.game, this.conveyorWidth/2, 0, this.conveyorHeight, 'dumpling1')));
            this.spawnReady = false;
            let timer = this.game.time.create(this.game, true);
            timer.add(400,this.setSpawnReadyTrue, this);
			timer.start();
		}
		this.food.callAll('update');
	}

	setSpawnReadyTrue(){
		this.spawnReady = true;
	}

}