import { Game, Scene, AUTO } from "phaser";
import avatarImage from "./avatar.png";

class MainScene extends Scene {
  constructor() {
    super("mainScene");
    this.avatars = {};
  }
  preload() {
    this.load.image("avatar", avatarImage);
  }
  create() {
    this.avatars = this.add.image(10, 10, "avatar");
  }
}

const game = new Game({
  scene: [MainScene],
  type: AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
});

const resizeGameToFullscreen = () => {
  game.resize(window.innerWidth, window.innerHeight);
};
window.addEventListener("resize", resizeGameToFullscreen);
window.addEventListener("load", resizeGameToFullscreen);
