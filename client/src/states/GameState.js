export class GameState extends Phaser.State {
	create() {
		// initialize game components here
		this.game.stage.backgroundColor = "#4488AA";

		const text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "RUSKIE", { font: "65px Arial", fill: "#ff0044", align: "center" });
		text.anchor.set(0.5);
	}

	update() {
		// game loop - implement game behaviour here
	}
}