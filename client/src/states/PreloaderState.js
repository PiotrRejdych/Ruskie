import fullStomach from '../../assets/textures/fullStomach.png'
import emptyStomach from '../../assets/textures/emptyStomach.png'

import izabela from '../../assets/textures/izabela.png';
import janusz from '../../assets/textures/janusz.png';
import bohun from '../../assets/textures/bohun.png';
import eatingIzabela from '../../assets/textures/eatingIzabela.png';
import eatingJanusz from '../../assets/textures/eatingJanusz.png';
import eatingBohun from '../../assets/textures/eatingBohun.png';


export class PreloaderState extends Phaser.State {
	preload() {
		// Images
		this.game.load.spritesheet('buttonsheet', 'assets/spritesheets/buttonsheet.png', 304, 49);
		this.game.load.image('stomach_empty', emptyStomach);
		this.game.load.image('stomach_full', fullStomach);
		this.game.load.image('cottageCheese', 'assets/textures/cottageCheese.png');
		this.game.load.image('dumpling1', 'assets/textures/dumpling1.png');
		this.game.load.image('dumpling2', 'assets/textures/dumpling2.png');
		this.game.load.image('dumpling3', 'assets/textures/dumpling3.png');
		this.game.load.image('potato1', 'assets/textures/potato1.png');
		this.game.load.image('potato2', 'assets/textures/potato2.png');
		this.game.load.image('potato3', 'assets/textures/potato3.png');
		this.game.load.image('rottenDumpling1', 'assets/textures/rottenDumpling1.png');
		this.game.load.image('rottenDumpling2', 'assets/textures/rottenDumpling2.png');
		this.game.load.image('rottenDumpling3', 'assets/textures/rottenDumpling3.png');
		this.game.load.image('spinach', 'assets/textures/spinach.png');
		this.game.load.image('spinachDumpling1', 'assets/textures/spinachDumpling1.png');
		this.game.load.image('spinachDumpling2', 'assets/textures/spinachDumpling2.png');
		this.game.load.image('spinachDumpling3', 'assets/textures/spinachDumpling3.png');
		this.game.load.image('strawberry', 'assets/textures/strawberry.png');
		this.game.load.image('strawberryDumpling1', 'assets/textures/strawberryDumpling1.png');
		this.game.load.image('strawberryDumpling2', 'assets/textures/strawberryDumpling2.png');
		this.game.load.image('strawberryDumpling3', 'assets/textures/strawberryDumpling3.png');
		this.game.load.image('conveyorBelt','assets/textures/conveyorBelt.png');

		this.game.load.image('izabela', izabela);
		this.game.load.image('janusz', janusz);
		this.game.load.image('bohun', bohun);
		this.game.load.image('eatingIzabela', eatingIzabela);
		this.game.load.image('eatingJanusz', eatingJanusz);
		this.game.load.image('eatingBohun', eatingBohun);

		// Data files
		this.game.load.json('handlerkeys', 'data/handlerkeys.json');
		this.game.load.json('food', 'data/food.json');

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