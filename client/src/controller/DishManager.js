export class DishManager {
	constructor(dishAssortment) {
		this._goodDishes = dishAssortment.filter(this._filterGoodDishes);
		this._badDishes = dishAssortment.filter(this._filterBadDishes);
	}

	determineDish(elapsedTime, playerIndex) {
		return this._goodDishes[Math.floor(Math.random() * this._goodDishes.length)];
	}

	_filterGoodDishes(dish) {
		return dish.sating >= 0;
	}

	_filterBadDishes(dish) {
		return dish.sating < 0;
	}
}