export class GameController {
	constructor(model, view) {
		this._model = model;
		this._view = view;

		this._spawnSpeed = this._model.SPAWN_SPEED_START;

		// separate spawn & elapsed time for every player
		this._spawnTime = [];
		this._elapsedTime = [];
	}

	init() {
		this._view.prepareScene(this._model.playersCount);
		this._view.onKeyPressed = this._onKeyPressed.bind(this);

		this._currentTime = new Date().getTime();

		for (let i = 0; i < this._model.playersCount; i++) {
			this._spawnTime[i] = this._calculateNextSpawnTime();
			this._elapsedTime[i] = 0;
		}
	}

	update(deltaTime) {
		for (let i = 0; i < this._model.playersCount; i++) {
			this._elapsedTime[i] += deltaTime;

			if (this._elapsedTime[i] >= this._spawnTime[i]) {
				this._spawnTime[i] = this._calculateNextSpawnTime();
				this._elapsedTime[i] = 0;
				this._spawnDish(i);
			}
		}
	}

	_spawnDish(playerIndex) {
		console.log("Player " + playerIndex + " dish spawned");
	}

	_calculateNextSpawnTime() {
		return Math.floor(Math.random() * 400) + 800;
	}

	_onKeyPressed(key) {
		if (this._model.isKeyHandled(key)) {
			console.log("Player " + this._model.getPlayerPressingKey(key) + " toggle state");
		}
	}
}