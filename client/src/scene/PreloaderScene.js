import { Scene } from "phaser";

export class PreloaderScene extends Scene {
	constructor() {
		super({ key: 'Preloader' });
	}

	preload() {
		// Load game assets here
	}

	create() {
		this.scene.start('Menu');
	}
}