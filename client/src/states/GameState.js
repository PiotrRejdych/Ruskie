import { GameModel } from "../model/GameModel";
import { GameView } from "../view/GameView";
import { GameController } from "../controller/GameController";


export class GameState extends Phaser.State {
	init(numberOfPlayers) {
		const gameModel = new GameModel(this.game.cache, numberOfPlayers);
		const gameView = new GameView(this.game);

		this._controller = new GameController(gameModel, gameView, this.game);
	}

	create() {
		this._lastFrameTime = this.game.time.now;
		this._controller.init();

		// Variables used to pause and unpause the game.
		const game = this.game;
		var text;

		// Pauses and unpauses the game on ESC key.
        window.onkeydown = function() {
            if (game.input.keyboard.event.keyCode === Phaser.Keyboard.ESC) {
                // if game is already paused, then destroy the game paused text.
                if (game.paused) {
                    game.paused = !game.paused;
                    text.destroy();
                // If the game is unpaused, then pause and show the paused text.
                } else {
                    game.paused = true;
                    text = game.add.text(game.width / 2 - 350, 100, "Press ESC to return to the game!", {font:"60px Bulgaria_Moderna", fill:"#000000"});
                }
            }
        };
	}

	update() {
		const deltaTime = this.game.time.now - this._lastFrameTime;
		this._controller.update(deltaTime);
		this._lastFrameTime = this.game.time.now;
	}
}