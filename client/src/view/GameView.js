export class GameView extends Phaser.Group {
	constructor(game) {
		super(game);
		this.game = game;

		this.onKeyPressed = null;
	}

	prepareScene(playersCount) {
		this.game.stage.backgroundColor = "#4488AA";

		const text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "RUSKIE", { font: "65px Arial", fill: "#ff0044", align: "center" });
		text.anchor.set(0.5);

		this.game.input.keyboard.onPressCallback = this._onKeyPressed.bind(this);
	}

	_onKeyPressed(key) {
		if (this.onKeyPressed) {
			this.onKeyPressed(key);
		}
	}
}