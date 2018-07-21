import { PlayerZone } from "./PlayerZone";

export class GameView extends Phaser.Group {
	constructor(game) {
		super(game);
		this.game = game;

		this.onKeyPressed = null;
	}

	prepareScene(playersCount) {
		this.game.stage.backgroundColor = "#4488AA";

		this.playerZones = this.game.add.group();

		for (let i = 0; i < playersCount; i++) {
			const playerZone = new PlayerZone(this.game, i);
			playerZone.x = 100 + i * 300;
            this.playerZones.add(playerZone);
        }

		this.game.input.keyboard.onPressCallback = this._onKeyPressed.bind(this);
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

	_onKeyPressed(key) {
		if (this.onKeyPressed) {
			this.onKeyPressed(key);
		}
	}
}