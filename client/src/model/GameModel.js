export class GameModel {
	constructor(gameCache, playersCount) {
		this.playersCount = playersCount;

		this.BASE_SPAWN_TIME = 1000; // in milliseconds
		this.BASE_SPAWN_SPEED = 1.0;

		this._playersEating = [];

		this._handlerKeys = gameCache.getJSON("handlerkeys").map(this._parsePlayerHandlerKeys);
		this._assortment = gameCache.getJSON("food").map(this._parseDish);
		this._characters = gameCache.getJSON("characters").map(this._parseCharacter);
	}

	getPlayingCharacters() {
		return this._characters.slice(0, this.playersCount);
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
		const playerIndex = this.getPlayerPressingKey(key);
		return playerIndex >= 0 && playerIndex < this.playersCount;
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

	_parseCharacter(character, index) {
		return {
			index: index,
			name: character.name,
			allergy: character.allergy
		};
	}
}