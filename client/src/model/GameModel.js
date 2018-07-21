export class GameModel {
	constructor(gameCache, playersCount) {
		this.playersCount = playersCount;

		this.BASE_SPAWN_TIME = 1000; // in milliseconds
		this.BASE_SPAWN_SPEED = 1.0;

		this._playersEating = [];

		this._handlerKeys = gameCache.getJSON("handlerkeys").map(this._parsePlayerHandlerKeys);
		this._assortment = gameCache.getJSON("food").map(this._parseDish);
	}

	setPlayerEating(playerIndex) {
		if (!this.isPlayerEating(playerIndex)) {
			this._playersEating.push(playerIndex);
		}
	}

	setPlayerStarving(playerIndex) {
		if (this.isPlayerEating(playerIndex)) {
			this._playersEating.splice(this._playersEating.indexOf(playerIndex), 1);
		}
	}

	isPlayerEating(playerIndex) {
		return this._playersEating.indexOf(playerIndex) >= 0;
	}

	getDishAssortment() {
		return this._assortment;
	}

	isKeyHandled(key) {
		return this.getPlayerPressingKey(key) >= 0;
	}

	getPlayerPressingKey(key) {
		return this._handlerKeys.findIndex((playerHandlerKeys) => {
			return playerHandlerKeys.primaryActionKey === key;
		});
	}

	_parsePlayerHandlerKeys(playerHandlerKeys) {
		return {
			primaryActionKey: playerHandlerKeys.primaryAction
		};
	}

	_parseDish(dish) {
		return {
			key: dish.name,
			sating: dish.sating
		};
	}
}