import { Button } from "../components/Button";

export class MenuState extends Phaser.State {
	create() {
        this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.cache.getImage('background').height, 'background');
        const twoPlayersButton = this._createTwoPlayersButton();
		const threePlayersButton = this._createThreePlayersButton();
        const creditsButton = this._createCreditsButton();
        const exitButton = this._createExitButton();
        this.game.add.text(this.game.width / 2 - 350, 100, "Ruskie", {font:"300px Bulgaria_Moderna", fill:"#000000"});
        this._music = this.game.add.audio('menuTheme');
        this._music.play();
    }

	_createTwoPlayersButton() {
		const button = new Button(this.game, "2 players", this._proceedToGameScene.bind(this, 2));
		button.x = this.game.width * 0.5;
		button.y = this.game.height * 0.5;
		return button;
	}

	_createThreePlayersButton() {
		const button = new Button(this.game, "3 players", this._proceedToGameScene.bind(this, 3));
		button.x = this.game.width * 0.5;
		button.y = this.game.height * 0.5 + 110;
		return button;
	}

    _createCreditsButton() {
        const button = new Button(this.game, "Credits", this._proceedToCreditsScene.bind(this));
        button.x = this.game.width * 0.5;
        button.y = this.game.height * 0.5 + 220;
        return button;
    }

    _createExitButton() {
        const button = new Button(this.game, "Exit", this._closeTab);
        button.x = this.game.width * 0.5;
        button.y = this.game.height * 0.5 + 330;
        return button;
    }

	_proceedToGameScene(playersCount) {
	    this._music.stop();
		this.game.state.start('Game', true, false, playersCount);
	}

    _proceedToCreditsScene() {
        this._music.stop();
        this.game.state.start('Credits');
    }

    _closeTab() {
	    close();
    }
}