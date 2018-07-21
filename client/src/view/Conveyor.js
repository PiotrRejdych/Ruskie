import {FoodItem} from "./FoodItem";
import {DishManager} from "../controller/DishManager";

export class Conveyor extends Phaser.Group {
    constructor(game) {
        super(game);

        this.game = game;

        this._belt = this._createBelt();
        this._food = this._createFoodGroup();
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
			foodItem.x += 3;

			if(foodItem.x > this.getWidth() - foodItem.width * 0.5) {
				garbage.push(foodItem);
			}
		});

	    garbage.forEach((foodItem) => {
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
		foodGroup.y = 10;
		return this.add(foodGroup);
	}
}