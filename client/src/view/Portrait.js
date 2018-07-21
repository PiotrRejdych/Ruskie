
export const SKIN = {
	JANUSZ: 0,
	IZABELA: 1,
	BOHUN: 2,
};

const ASSETS = {
	[SKIN.JANUSZ]: 'janusz',
	[SKIN.BOHUN]: 'bohun',
	[SKIN.IZABELA]: 'izabela'
};

export class Portrait extends Phaser.Sprite {
	constructor(game, skin = SKIN.JANUSZ) {
		super(game, 0, 0, ASSETS[skin]);

		this.anchor.set(0.5);
		this.scale.set(0.5);

		this.setNotEating();
	}

	setEating() {
		this.frame = 1;
	}

	setNotEating() {
		this.frame = 0;
	}
}