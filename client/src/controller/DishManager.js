export class DishManager {
	constructor(dishAssortment, playersCount) {
		this._goodDishes = dishAssortment.filter(this._filterGoodDishes);
		this._badDishes = dishAssortment.filter(this._filterBadDishes);

		this.TIMESTEP = 1500;
		this.ROTTEN_DISH_PER_TIMESTEP = 3;

		this._rottenDishesCount = [];
		for (let i = 0; i < playersCount; i++) {
			this._rottenDishesCount[i] = [];
		}
	}

	determineDish(globalElapsedTime, playerIndex) {
		const currentTimeStep = this._calculateCurrentTimeStep(globalElapsedTime);
		const currentRottenDishesLimit = this._calculateRottenDishesLimitInTimeStep(currentTimeStep);

		if (!this._rottenDishesCount[playerIndex][currentTimeStep]) this._rottenDishesCount[playerIndex][currentTimeStep] = 0;

		if (currentTimeStep === 0) {
			return this._getRandomDish(playerIndex, currentTimeStep, currentRottenDishesLimit);
		}
		else {
			const previousTimeStep = currentTimeStep - 1;
			const previousRottenDishesLimit = this._calculateRottenDishesLimitInTimeStep(previousTimeStep);

			if (this._rottenDishesCount[playerIndex][previousTimeStep] < previousRottenDishesLimit - 1) {
				this._rottenDishesCount[playerIndex][previousTimeStep] += 1;
				return this._getRandomBadDish();
			}
			else {
				return this._getRandomDish(playerIndex, currentTimeStep, currentRottenDishesLimit);
			}
		}
	}

	_getRandomDish(playerIndex, currentTimeStep, currentRottenDishesLimit) {
		if (this._rottenDishesCount[playerIndex][currentTimeStep] < currentRottenDishesLimit - 1 && this._shouldSpawnRottenDish()) {
			this._rottenDishesCount[playerIndex][currentTimeStep] += 1;
			return this._getRandomBadDish();
		}
		else {
			return this._getRandomGoodDish();
		}
	}

	_getRandomGoodDish() {
		return this._goodDishes[Math.floor(Math.random() * this._goodDishes.length)];
	}

	_getRandomBadDish() {
		return this._badDishes[Math.floor(Math.random() * this._badDishes.length)];
	}

	_calculateCurrentTimeStep(globalElapsedTime) {
		return Math.floor(globalElapsedTime / this.TIMESTEP);
	}

	_calculateRottenDishesLimitInTimeStep(timeStep) {
		return this.ROTTEN_DISH_PER_TIMESTEP + Math.floor(timeStep * 0.1);
	}

	_shouldSpawnRottenDish() {
		return Math.random() < 0.4;
	}

	_filterGoodDishes(dish) {
		return dish.sating >= 0;
	}

	_filterBadDishes(dish) {
		return dish.sating < 0;
	}
}