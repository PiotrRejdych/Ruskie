

export class Stomach extends Phaser.Group {

	set fullness (value) {
		this._fullness = value;
		this.updateMask();
	}

	constructor(game) {
		super(game);

		window.stomach = this;

		this._fullness = 0;

		this.emptyStomach = this.createEmptyStomach(game);
		this.fullStomach = this.createFullStomach(game);

		this.pivot.x = this.emptyStomach.width / 2;
		this.pivot.y = this.emptyStomach.height / 2;

		this.maskGraphic = this.createMask(game, this.getFillStomachHeight());
		this.fullStomach.mask = this.maskGraphic;

		this.scale.set(0.5);
	}

	createEmptyStomach(game) {
		return this.add(game.add.image(0, 0, "stomach_empty"));
	}

	createFullStomach(game) {
		return this.add(game.add.image(0, 0, "stomach_full"));
	}

	createMask(game) {
		const mask = game.add.graphics(0, 0);
		mask.beginFill(0xffffff);
		mask.drawRect(0, 0, this.emptyStomach.width, );
		return this.add(mask);
	}

	setFullness(fullness) {
		this.game.add.tween(this).to({ fullness }, 500, Phaser.Easing.Elastic.Out, true);
	}

	updateMask() {
		this.maskGraphic.clear();
		this.maskGraphic.beginFill(0xffffff);
		this.maskGraphic.drawRect(0, 0, this.emptyStomach.width, this.getFillStomachHeight());
	}

	getFillStomachHeight() {
		return this._fullness * this.fullStomach.height;
	}
}