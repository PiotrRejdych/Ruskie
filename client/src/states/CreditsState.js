import { Button } from "../components/Button";

export class CreditsState extends Phaser.State {
    create() {
        this.bg = this.game.add.tileSprite(0, 0, this.game.cache.getImage('partTimeKamikaze').width, this.game.cache.getImage('partTimeKamikaze').height, 'partTimeKamikaze');
        this.game.stage.backgroundColor = "#000000";

        this.game.add.text(this.game.cache.getImage('partTimeKamikaze').width + 50, 80, "Krzysztof \"Krzysiu\" Perwel", {font:"60px Bulgaria_Moderna", fill:"#FFFFFF"});
        this.game.add.text(this.game.cache.getImage('partTimeKamikaze').width + 50, 170, "Maciej \"Taniniwer\" Tyrała", {font:"60px Bulgaria_Moderna", fill:"#FFFFFF"});
        this.game.add.text(this.game.cache.getImage('partTimeKamikaze').width + 50, 260, "Myagmar-Erdene \"Erko\" Purevdorj", {font:"60px Bulgaria_Moderna", fill:"#FFFFFF"});
        this.game.add.text(this.game.cache.getImage('partTimeKamikaze').width + 50, 350, "Mykyta \"Nick\" Dniprovsky", {font:"60px Bulgaria_Moderna", fill:"#FFFFFF"});
        this.game.add.text(this.game.cache.getImage('partTimeKamikaze').width + 50, 440, "Piotr \"eRedin\" Rejdych", {font:"60px Bulgaria_Moderna", fill:"#FFFFFF"});
        const menuButton = this._createMenuButton();
    }

    _createMenuButton() {
        const button = new Button(this.game, "Back to menu", this._proceedToMenuScene);
        button.x = this.game.width * 0.5;
        button.y = this.game.height - 110;
        return button;
    }

    _proceedToMenuScene() {
        this.game.state.start('Menu', true, false, 3);
    }
}