import { Button } from "../components/Button";

export class MenuState extends Phaser.State {
	create() {
        this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.cache.getImage('background').height, 'background');
        const playButton = this._createPlayButton();
        const creditsButton = this._createCreditsButton();
	}

	_createPlayButton() {
		const button = new Button(this.game, "2 players", this._proceedToGameScene);
		button.x = this.game.width * 0.5;
		button.y = this.game.height * 0.5;
		return button;
	}

    _createCreditsButton() {
        const button = new Button(this.game, "Credits", this._proceedToCreditsScene);
        button.x = this.game.width * 0.5;
        button.y = this.game.height * 0.5 + 110;
        return button;
    }

	_proceedToGameScene() {
		this.game.state.start('Game', true, false, 3);
	}

    _proceedToCreditsScene() {
        this.game.state.start('Credits', true, false, 3);
    }
}