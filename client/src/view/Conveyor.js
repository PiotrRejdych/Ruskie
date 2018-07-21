import {FoodItem} from "./FoodItem";
import {DishManager} from "../controller/DishManager";

export class Conveyor extends Phaser.Group {
    constructor(game, x, y) {
        super(game);

        this.x = x;
        this.y = y;

        this.backgroundImage = this.game.add.sprite(this.x, this.y, 'conveyorBelt');
        this.backgroundImage.scale.setTo(0.3, 0.3);

        this.conveyorWidth = this.backgroundImage.width;
        this.conveyorHeight = this.backgroundImage.height;

        this.food = this.game.add.group();
    }

    spawnDumpling (dumplingType) {
        this.food.add(this.game.world.add(new FoodItem(this.game, this.x + this.conveyorWidth * 0.6, this.y, this.conveyorHeight, dumplingType)));
	}

    update() {

    }

}