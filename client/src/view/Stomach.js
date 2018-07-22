export class Stomach extends Phaser.Group {

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

		this.scale.set(0.25);
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
		mask.drawRect(0, 0, this.emptyStomach.width, 0);
		return this.add(mask);
	}

	setFullness(fullness) {
        // // Playing the chewing sound.
        // const music = this.game.add.audio('chewing_sound');
        // music.play();

		this._fullness = fullness;
        this.updateMask();
	}

	updateMask() {
		this.maskGraphic.clear();
		this.maskGraphic.beginFill(0xffffff);
		this.maskGraphic.drawRect(0, this.emptyStomach.height - this.getFillStomachHeight(), this.emptyStomach.width, this.emptyStomach.height);
	}

	getFillStomachHeight() {
		return this._fullness * this.fullStomach.height / 100;
	}
}