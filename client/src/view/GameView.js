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
			playerZone.x = 100 + i * 300;
            this.playerZones.add(playerZone);
        }

		this.game.input.keyboard.onDownCallback = this._onKeyDown.bind(this);
		this.game.input.keyboard.onUpCallback = this._onKeyUp.bind(this);
	}

	spawnDishForPlayer(playerIndex, dish) {
		this.getPlayerZone(playerIndex).spawnDish(dish);
	}

	openPlayerMouth(playerIndex) {
		this.getPlayerZone(playerIndex).openMouth();
	}

	closePlayerMouth(playerIndex) {
		this.getPlayerZone(playerIndex).closeMouth();
	}

	getPlayerZone(playerIndex) {
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