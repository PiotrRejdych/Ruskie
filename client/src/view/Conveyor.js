import {FoodItem} from "./FoodItem";
import {DishManager} from "../controller/DishManager";

export class Conveyor extends Phaser.Group {
    constructor(game) {
        super(game);

        this.game = game;

        this._backgroundImage = this.game.add.sprite(0, 0, 'conveyorBelt');
        this._backgroundImage.scale.setTo(0.3, 0.3);

        this._food = this.game.add.group();
	    this._food.x = 20;

        this.add(this._backgroundImage);
	    this.add(this._food);
    }

    spawnDish(dish) {
    	const foodItem = new FoodItem(this.game, dish);
	    foodItem.y = Math.floor(Math.random() * this.getHeight() * 0.6);
        this._food.add(foodItem);
	}

    update() {
    	const garbage = [];
		this._food.children.forEach((foodItem) => {
			foodItem.x += 4;

			if(foodItem.x > this.getWidth() - foodItem.width * 0.5) {
				garbage.push(foodItem);
			}
		});

	    garbage.forEach((foodItem) => {
		    foodItem.destroy();
	    });
    }

    getWidth() {
    	return this._backgroundImage.width;
    }

	getHeight() {
		return this._backgroundImage.height;
	}

}