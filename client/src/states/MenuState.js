import { Button } from "../components/Button";

export class MenuState extends Phaser.State {
	create() {
		const playButton = this._createPlayButton();
	}

	_createPlayButton() {
		const button = new Button(this.game, "2 players", this._proceedToGameScene);
		button.x = this.game.width * 0.5;
		button.y = this.game.height * 0.5;
		return button;
	}

	_proceedToGameScene() {
		this.game.state.start('Game', true, false, 2);
	}
}