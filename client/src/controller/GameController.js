import { DishManager } from "./DishManager";

export class GameController {
	constructor(model, view, game) {
		this._model = model;
		this._view = view;
        this._game = game;

		this._dishManager = null;
		this._globalElapsedTime = 0;
		this._spawnSpeed = this._model.BASE_SPAWN_SPEED;

		// separate spawn & elapsed time for every player
		this._spawnTime = [];
		this._elapsedTime = [];
	}

	init() {
		this._dishManager = new DishManager(this._model.getDishAssortment(), this._model.playersCount);
		this._globalElapsedTime = 0;
		this._spawnSpeed = this._model.BASE_SPAWN_SPEED;

		for (let i = 0; i < this._model.playersCount; i++) {
			this._spawnTime[i] = this._calculateNextSpawnTime();
			this._elapsedTime[i] = 0;
		}

		this._view.prepareScene(this._model.getPlayingCharacters());
		this._view.onKeyDown = this._onKeyDown.bind(this);
		this._view.onKeyUp = this._onKeyUp.bind(this);

		this._game.eatingSignal = new Phaser.Signal();
        this._game.eatingSignal.add(this._toEatOrNotToEat, this);
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

		this._spawnSpeed = this._model.BASE_SPAWN_SPEED + this._globalElapsedTime / 40000;
	}

	_spawnDish(playerIndex) {
		const dish = this._dishManager.determineDish(this._globalElapsedTime, playerIndex);
		this._view.spawnDishForPlayer(playerIndex, dish);
	}

	_calculateNextSpawnTime() {
		return this._model.BASE_SPAWN_TIME / this._spawnSpeed;
	}

	_onKeyDown(key) {
		if (this._game.state.getCurrentState().key === "Game" && this._model.isKeyHandled(key)) {
			const playerIndex = this._model.getPlayerPressingKey(key);
			this._model.setPlayerEating(playerIndex);
			this._view.openPlayerMouth(playerIndex);
		}
	}

	_onKeyUp(key) {
		if (this._game.state.getCurrentState().key === "Game" && this._model.isKeyHandled(key)) {
			const playerIndex = this._model.getPlayerPressingKey(key);
			this._model.setPlayerStarving(playerIndex);
			this._view.closePlayerMouth(playerIndex);
		}
	}

    _toEatOrNotToEat(playerIndex, dish) {
		if(this._model.isPlayerEating(playerIndex)) {
			let sating = dish.sating;

			if (this._model.isPlayerAllergicToDish(playerIndex, dish)) {
				sating *= 0.5;
				this._view.showPlayerAllergy(playerIndex);
			}
			else if (sating < 0) {
				this._view.showPlayerSickness(playerIndex);
			}

			this._model.setFullness(playerIndex, this._model.getFullness(playerIndex) + sating);
            this._view.getPlayerZone(playerIndex)._stomach.setFullness(this._model.getFullness(playerIndex));

            if (this._model.getFullness(playerIndex) >= this._model.STOMACH_CAPACITY) {
            	this._game.state.start('Summary', true, false, this._model.getPlayingCharacters()[playerIndex + 1].name, this._playersCount);
            }
        }
	}
}