import {FoodItem} from "./FoodItem";
import {DishManager} from "../controller/DishManager";

export class Conveyor extends Phaser.Group {
    constructor(game, playerIndex) {
        super(game);

        this.game = game;
        this._playerIndex = playerIndex;

        this._belt = this._createBelt();
        this._food = this._createFoodGroup();

        this.update.bind(this);
    }

    spawnDish(dish) {
    	const foodItem = new FoodItem(this.game, dish);
	    foodItem.y = Math.floor(Math.random() * this.getHeight() * 0.6);
        this._food.add(foodItem);
	}

    update() {
    	this._belt.tilePosition.x += 10;

    	const garbage = [];
		this._food.children.forEach((foodItem) => {
			foodItem.x += 10;

			if(foodItem.x > this.getWidth() - foodItem.width * 0.5 + 10) {
				garbage.push(foodItem);
			}
		});

	    garbage.forEach((foodItem) => {
	    	this.game.eatingSignal.dispatch(this._playerIndex, foodItem.dish);
		    foodItem.destroy();
	    });
    }

    getWidth() {
    	return this._belt.width;
    }

	getHeight() {
		return this._belt.height;
	}

	_createBelt() {
		const belt = this.game.add.tileSprite(0, 0, 1200, 181, 'conveyorBelt');
		belt.tileScale.x = 0.3;
		belt.tileScale.y = 0.3;
		return this.add(belt);
	}

	_createFoodGroup() {
		const foodGroup = this.game.add.group();
		return this.add(foodGroup);
	}
}