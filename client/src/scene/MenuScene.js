import { Scene } from "phaser";
import { Button } from "../components/Button";

export class MenuScene extends Scene {
	constructor() {
		super({ key: 'Menu' });
	}

	create() {
		const playButton = this._createPlayButton();
	}

	_createPlayButton() {
		const button = new Button(this, "Play", this._proceedToGameScene);
		button.x = 400;
		this.add.existing(button);
		return button;
	}

	_proceedToGameScene() {
		this.scene.start('Game');
	}
}
