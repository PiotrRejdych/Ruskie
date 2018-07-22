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

		const game = this.game;
        // Create a label to use as a button
        window.onkeydown = function() {
            if (game.input.keyboard.event.keyCode === Phaser.Keyboard.ESC) {
                game.paused = !game.paused;
            }
        };
	}

	update() {
		const deltaTime = this.game.time.now - this._lastFrameTime;
		this._controller.update(deltaTime);
		this._lastFrameTime = this.game.time.now;
	}
}