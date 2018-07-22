export class AllergyIndicator extends Phaser.Group {
	constructor(game, allergyKey) {
		super(game);

		this.game = game;

		this._preview = this._createAllergyPreview(allergyKey);
		this._cross = this._createCross();
	}

	_createAllergyPreview(allergyKey) {
		const preview = this.game.add.sprite(0, 0, allergyKey);
		preview.anchor.set(0.5);
		preview.scale.set(0.2);
		return this.add(preview);
	}

	_createCross() {
		const cross = this.game.add.sprite(0, 0, "cross");
		cross.anchor.set(0.5);
		cross.scale.set(0.2);
		cross.angle = 40;
		cross.y = 5;
		return this.add(cross);
	}
}