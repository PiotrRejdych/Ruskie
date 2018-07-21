
export const NAME = {
	JANUSZ: 0,
	IZABELA: 1,
	BOHUN: 2,
}

const ASSETS = {
	[NAME.JANUSZ]: 'janusz',
	[NAME.BOHUN]: 'bohun',
	[NAME.IZABELA]: 'izabela'
};

export class Portrait extends Phaser.Group {
	constructor(game, name = NAME.JANUSZ) {
		super(game);
		this.game = game;
		this.name = name;

		window.portrait = this;

		this._fullness = 0;

		this.portrait = this.createPortrait(game);

		this.pivot.x = this.portrait.width / 2;
		this.pivot.y = this.portrait.height / 2;

		this.scale.set(0.5);

		this.setNotEating();
	}

	setEating() {
		this.portrait.frame = 1;
	}

	setNotEating() {
		this.portrait.frame = 0;
	}

	createPortrait() {
		return this.add(this.game.add.sprite(0, 0, ASSETS[this.name]));
	}
}