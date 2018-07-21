

export class Stomach extends Phaser.Group {

	set fillness (value) {
		this._fillness = value;
		this.updateMask();
	}

	constructor(game) {
		super(game);

		window.stomach = this;

		this._fillness = 0;

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

	setFillness(fillness) {
		this.game.add.tween(this).to({ fillness }, 500, Phaser.Easing.Elastic.Out, true);
	}

	updateMask() {
		this.maskGraphic.clear();
		this.maskGraphic.beginFill(0xffffff);
		this.maskGraphic.drawRect(0, 0, this.emptyStomach.width, this.getFillStomachHeight());
	}

	getFillStomachHeight() {
		return this._fillness * this.fullStomach.height;
	}
}