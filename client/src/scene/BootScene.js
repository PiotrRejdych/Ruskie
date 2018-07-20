import { Scene } from "phaser";

export class BootScene extends Scene {
	constructor() {
		super({ key: 'Boot' });
	}

	create() {
		// Implement initial game config here
		this.scene.start('Preloader');
	}
}