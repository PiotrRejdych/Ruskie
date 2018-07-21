export class GameController {
	constructor(model, view) {
		this._model = model;
		this._view = view;

		this._spawnSpeed = this._model.BASE_SPAWN_SPEED;

		// separate spawn & elapsed time for every player
		this._spawnTime = [];
		this._elapsedTime = [];

		this._globalElapsedTime = 0;
	}

	init() {
		this._view.prepareScene(this._model.playersCount);
		this._view.onKeyPressed = this._onKeyPressed.bind(this);

		for (let i = 0; i < this._model.playersCount; i++) {
			this._spawnTime[i] = this._calculateNextSpawnTime();
			this._elapsedTime[i] = 0;
		}

		this._globalElapsedTime = 0;
	}

	update(deltaTime) {
		this._globalElapsedTime += deltaTime;

		for (let i = 0; i < this._model.playersCount; i++) {
			this._elapsedTime[i] += deltaTime;

			if (this._elapsedTime[i] >= this._spawnTime[i]) {
				this._spawnTime[i] = this._calculateNextSpawnTime();
				this._elapsedTime[i] = 0;
				this._spawnDish(i);
			}
		}

		this._spawnSpeed = this._model.BASE_SPAWN_SPEED + this._globalElapsedTime / 30000;
	}

	_spawnDish(playerIndex) {
		// TODO: spawn dish in view
	}

	_calculateNextSpawnTime() {
		return this._model.BASE_SPAWN_TIME * this._spawnSpeed;
	}

	_onKeyPressed(key) {
		if (this._model.isKeyHandled(key)) {
			console.log("Player " + this._model.getPlayerPressingKey(key) + " toggle state");
		}
	}
}