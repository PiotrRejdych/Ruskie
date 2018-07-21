export class GameController {
	constructor(model, view) {
		this._model = model;
		this._view = view;
	}

	init() {
		this._view.prepareScene(this._model.playersCount);
	}

	update(deltaTime) {

	}
}