
export const NAME = {
	JANUSZ: 0,
	IZABELA: 1,
	BOHUN: 2,
}

const EATING_ASSETS = {
	[NAME.JANUSZ]: 'janusz',
	[NAME.BOHUN]: 'bohun',
	[NAME.IZABELA]: 'izabela'
};

const ASSETS = {
	[NAME.JANUSZ]: 'eatingJanusz',
	[NAME.BOHUN]: 'eatingBohun',
	[NAME.IZABELA]: 'eatingIzabela'
}

export class Portrait extends Phaser.Group {
	constructor(game, name = NAME.JANUSZ) {
		super(game);
		this.game = game;
		this.name = name;

		window.portrait = this;

		this._fullness = 0;

		this.portrait = this.createPortrait(game);
		this.eatingPortrait = this.createEatingPortrait(game);

		this.pivot.x = this.portrait.width / 2;
		this.pivot.y = this.portrait.height / 2;

		this.scale.set(0.5);

		this.setNotEating();
	}

	setEating() {
		this.portrait.visible = true;
		this.eatingPortrait.visible = false;
	}

	setNotEating() {
		this.portrait.visible = false;
		this.eatingPortrait.visible = true;
	}

	createPortrait() {
		return this.add(this.game.add.image(0, 0, ASSETS[this.name]));
	}

	createEatingPortrait() {
		return this.add(this.game.add.image(0, 0, EATING_ASSETS[this.name]));
	}
}