import { Scene } from "phaser";

export class PreloaderScene extends Scene {
	constructor() {
		super({ key: 'Preloader' });
	}

	preload() {
		// Loading game assets happens here

		// Images
		this.load.spritesheet('buttonsheet', 'assets/spritesheets/buttonsheet.png', { frameWidth: 304, frameHeight: 49 });
	}

	create() {
		this.scene.start('Menu');
	}
}