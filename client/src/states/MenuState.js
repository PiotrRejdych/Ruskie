import { Button } from "../components/Button";

export class MenuState extends Phaser.State {
	create() {
        this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.cache.getImage('background').height, 'background');
        const playButton = this._createPlayButton();
        const creditsButton = this._createCreditsButton();
        const exitButton = this._createExitButton();
        this.game.add.text(this.game.width / 2 - 350, 100, "Ruskie", {font:"300px Bulgaria_Moderna", fill:"#000000"});

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

    _createExitButton() {
        const button = new Button(this.game, "Exit", this._closeTab);
        button.x = this.game.width * 0.5;
        button.y = this.game.height * 0.5 + 220;
        return button;
    }

	_proceedToGameScene() {
		this.game.state.start('Game', true, false, 3);
	}

    _proceedToCreditsScene() {
        this.game.state.start('Credits', true, false, 3);
    }

    _closeTab() {
	    close();
    }
}