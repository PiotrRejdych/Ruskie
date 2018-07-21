import {FoodItem} from "./FoodItem";
import {DishManager} from "../controller/DishManager";

export class Conveyor extends Phaser.Group {
    constructor(game, playerIndex) {
        super(game);

        this.game = game;
        this._playerIndex = playerIndex;

        this._backgroundImage = this.game.add.sprite(0, 0, 'conveyorBelt');
        this._backgroundImage.scale.setTo(0.3, 0.3);

        this._food = this.game.add.group();
	    this._food.x = 20;

        this.add(this._backgroundImage);
	    this.add(this._food);
    }

    spawnDish(dish) {
    	const foodItem = new FoodItem(this.game, dish);
	    foodItem.x = Math.floor(Math.random() * this.getWidth() * 0.8);
        this._food.add(foodItem);
	}

    update() {
    	const garbage = [];
		this._food.children.forEach((foodItem) => {
			foodItem.y += 4;

			if(foodItem.y > this.getHeight() - foodItem.height * 0.5) {
				garbage.push(foodItem);
			}
		});

	    garbage.forEach((foodItem) => {
	    	this.game.eatingSignal.dispatch(this._playerIndex, foodItem.dish.sating);
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