import { Scene } from "phaser";

export class GameScene extends Scene {
	constructor() {
		super({ key: 'Game' });
	}

	create() {
		console.log("GAME START");
	}
}