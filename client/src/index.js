import gameConfig from "./gameConfig";
import { BootState } from "./states/BootState";
import { PreloaderState } from "./states/PreloaderState";
import { MenuState } from "./states/MenuState";
import { GameState } from "./states/GameState";
import { SummaryState } from "./states/SummaryState";
import { CreditsState } from "./states/CreditsState";

window.onload = function () {
	const game = new Phaser.Game(gameConfig.canvasWidth, gameConfig.canvasHeight, Phaser.CANVAS, 'phaser-canvas');
	game.state.add('Boot', new BootState());
	game.state.add('Preloader', new PreloaderState());
	game.state.add('Menu', new MenuState());
	game.state.add('Game', new GameState());
    game.state.add('Credits', new CreditsState());
	game.state.add('Summary', new SummaryState());
	game.state.start('Boot');
};