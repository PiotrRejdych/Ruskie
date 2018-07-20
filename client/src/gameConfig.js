import { AUTO } from "phaser";
import { BootScene } from "./scene/BootScene";
import { PreloaderScene } from "./scene/PreloaderScene";
import { MenuScene } from "./scene/MenuScene";
import { GameScene } from "./scene/GameScene";

export default {
	type: AUTO,
	width: 800,
	height: 600,
	scene: [ BootScene, PreloaderScene, MenuScene, GameScene ]
};