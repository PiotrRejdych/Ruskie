
export class GameModel {
	constructor(gameCache, playersCount) {
		this.playersCount = playersCount;

		this._handlerKeys = gameCache.getJSON("handlerkeys").map(this._parsePlayerHandlerKeys);
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
}