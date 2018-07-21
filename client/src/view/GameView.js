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
            this.playerZones.add(new PlayerZone(this.game));
        }

		this.game.input.keyboard.onPressCallback = this._onKeyPressed.bind(this);
	}

	_onKeyPressed(key) {
		if (this.onKeyPressed) {
			this.onKeyPressed(key);
		}
	}
}