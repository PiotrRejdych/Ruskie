export class GameController {
	constructor(model, view) {
		this._model = model;
		this._view = view;

		console.log("Game controller initiated. Players count " + this._model.numberOfPlayers);
	}
}