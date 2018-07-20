import { GameObjects } from "phaser";

export class Button extends GameObjects.Group {
	constructor(scene, labelText, onClick) {
		super(scene);

		const background = this._createBackground(scene, onClick);
		const label = this._createLabel(scene, labelText);
	}

	_createBackground(scene, onClick) {
		const background = scene.add.sprite(0, 0, "buttonsheet", 0).setInteractive();

		background.on('pointerover', function (event) { background.frame = background.texture.frames[1]; });
		background.on('pointerout', function (event) { background.frame = background.texture.frames[0]; });
		background.on('pointerup', function (event) {background.frame = background.texture.frames[1];});
		background.on('pointerdown', function (event) {
			background.frame = background.texture.frames[2];
			if (onClick) { onClick(); }
		});

		return this.add(background);
	}

	_createLabel(scene, text) {
		const label = scene.add.text(0, 0, text);
		label.setFontFamily('Arial');
		label.setFontSize(64);
		label.setColor('#ffff00');
		return this.add(label);
	}
}