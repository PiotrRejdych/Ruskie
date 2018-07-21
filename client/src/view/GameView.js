import { PlayerZone } from "./PlayerZone";

export class GameView extends Phaser.Group {
	constructor(game) {
		super(game);
		this.game = game;

		this.onKeyDown = null;
		this.onKeyUp = null;
	}

	prepareScene(playersCount) {
		this.game.stage.backgroundColor = "#4488AA";

		this.playerZones = this.game.add.group();

		for (let i = 0; i < playersCount; i++) {
			const playerZone = new PlayerZone(this.game, i);
			playerZone.y = i * 220;
            this.playerZones.add(playerZone);
        }

		this.playerZones.x = 120;
		this.playerZones.y = (this.game.height - this.playerZones.height) * 0.5;

		this.game.input.keyboard.onDownCallback = this._onKeyDown.bind(this);
		this.game.input.keyboard.onUpCallback = this._onKeyUp.bind(this);
	}

	spawnDishForPlayer(playerIndex, dish) {
		this._getPlayerZone(playerIndex).spawnDish(dish);
	}

	openPlayerMouth(playerIndex) {
		this._getPlayerZone(playerIndex).openMouth();
	}

	closePlayerMouth(playerIndex) {
		this._getPlayerZone(playerIndex).closeMouth();
	}

	_getPlayerZone(playerIndex) {
		return this.playerZones.children[playerIndex];
	}

	_onKeyDown(event) {
		if (this.onKeyDown) {
			this.onKeyDown(event.key);
		}
	}

	_onKeyUp(event) {
		if (this.onKeyUp) {
			this.onKeyUp(event.key);
		}
	}
}