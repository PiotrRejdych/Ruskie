export class Button extends Phaser.Group {
	constructor(game, labelText, onClick) {
		super(game);

		const background = this._createBackground(game, onClick);
		const label = this._createLabel(game, labelText);

		label.x = background.width * 0.5;
		label.y = background.height * 0.5;

		this.pivot.x = background.width * 0.5;
		this.pivot.y = background.height * 0.5;
	}

	_createBackground(game, onClick) {
		const button = game.add.button(0, 0, "buttonsheet", onClick, null, 1, 0);
		return this.add(button);
	}

	_createLabel(game, labelText) {
		const label = game.add.text(0, 0, labelText, this._getLabelStyle());
		label.anchor.set(0.5);
		return this.add(label);
	}

	_getLabelStyle() {
		return {font: "50px Bulgaria_Moderna", fill: "#86322e", boundsAlignV: "middle", align: "center"};
	}
}