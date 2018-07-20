import { Scene } from "phaser";

export class MenuScene extends Scene {
	constructor() {
		super({ key: 'Menu' });
	}

	create() {
		this.scene.start('Game');
	}
}