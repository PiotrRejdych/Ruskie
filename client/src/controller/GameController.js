export class GameController {
	constructor(model, view) {
		this._model = model;
		this._view = view;
	}

	init() {
		this._view.prepareScene(this._model.playersCount);
		this._view.onKeyPressed = this._onKeyPressed.bind(this);
	}

	update(deltaTime) {

	}

	_onKeyPressed(key) {
		if (this._model.isKeyHandled(key)) {
			console.log("Player " + this._model.getPlayerPressingKey(key) + " toggle state");
		}
	}
}