export class PreloaderState extends Phaser.State {
	preload() {
		// Images
		this.game.load.spritesheet('buttonsheet', 'assets/spritesheets/buttonsheet.png', 304, 49);

		/*
    	// Images
    	this.game.load.atlasJSONArray('basesheet', 'assets/spritesheets/basesheet.png',
    	                              'assets/spritesheets/basesheet.json');
    	this.game.load.spritesheet('buttonsheet', 'assets/spritesheets/buttonsheet.png', 304, 49);
    	this.game.load.image('logo', 'assets/textures/logo.png');

    	// Sounds
    	this.game.load.audio('hover_snd', 'assets/sounds/btn_hover.wav');

    	// Data files
    	this.game.load.json('tetrominoes', 'data/tetrominoes.json');

    	// Force Phaser to preload custom font by creating temporary text object
    	var fontFix = this.game.add.text(0, 0, "fix", {font: "1px endorregular"});
    	fontFix.destroy();
    	*/
	}

	create() {
		this.game.state.start('Menu');
	}
}