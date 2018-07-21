
export class GameModel {
	constructor(gameCache, playersCount) {
		this.playersCount = playersCount;

		this._handlerKeys = gameCache.getJSON("handlerkeys").map(this._parsePlayerHandlerKeys);
		this._assortment = gameCache.getJSON("food").map(this._parseDish);
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