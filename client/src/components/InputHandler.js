export class InputHandler {
	constructor(playerIndex, handlerKeys) {
		this._playerIndex = playerIndex;
		this._handlerKeys = handlerKeys;
	}

	handlesKey(key) {
		for (let propertyName in handlerKeys) {
			if (handlerKeys.hasOwnProperty(propertyName) && handlerKeys[propertyName]) {
				return true;
			}
		}
	}
}