import { Conveyor } from "./Conveyor";
import { Portrait } from "./Portrait";
import { Stomach } from "./Stomach";
import { AllergyIndicator } from "./AllergyIndicator";

export class PlayerZone extends Phaser.Group {
	constructor(game, character) {
		super(game);

		this.game = game;
		this.character = character;
		this._conveyor = this._createConveyor(character.index);
		this._portrait = this._createPortrait(character.index);
		this._stomach = this._createStomach(character.index);
		this._allergy = this._createAllergy(character.allergy);

		this._allergyIndicator = this._createAllergyIndicator();
		this._sickIndicator = this._createSickIndicator();
	}

	spawnDish(dish) {
		this._conveyor.spawnDish(dish);
	}

	openMouth() {
		this._portrait.setEating();
	}

	closeMouth() {
		this._portrait.setNotEating();
	}

	showAllergy() {
        // Playing the ouch sound because of allergy.
        let music;
        if (this.character.index === 1) {
            music = this.game.add.audio('ouch_female_sound');
        } else {
            music = this.game.add.audio('ouch_male_sound');
        }
        music.volume += 0.3;
        music.play();

		if (this._allergyIndicator.timerEvent) {
			this.game.time.events.remove(this._allergyIndicator.timerEvent);
			this._allergyIndicator.timerEvent = null;
		}

		this.game.add.tween(this._allergyIndicator).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
		this._allergyIndicator.timerEvent = this.game.time.events.add(1000, this._hideAllergy, this);
	}

	showSickness() {
        // Playing the puking sound.
        const music = this.game.add.audio('puking_sound');
        music.play();
		if (this._sickIndicator.timerEvent) {
			this.game.time.events.remove(this._sickIndicator.timerEvent);
			this._sickIndicator.timerEvent = null;
		}

		this.game.add.tween(this._sickIndicator).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
		this._sickIndicator.timerEvent = this.game.time.events.add(1000, this._hideSickness, this);
	}

	_createConveyor(playerIndex) {
		const conveyor = new Conveyor(this.game, playerIndex);
		return this.add(conveyor);
	}

	_createPortrait(playerIndex) {
		const portrait = new Portrait(this.game, playerIndex);
		portrait.y = this._conveyor.getHeight() * 0.5 - 10;
		portrait.x = this._conveyor.getWidth();
		return this.add(portrait);
	}

	_createStomach(playerIndex) {
		const stomach = new Stomach(this.game, playerIndex);
		stomach.x =  this._conveyor.getWidth() + 250;
		stomach.y = 80;
		return this.add(stomach);
	}

	_createAllergy(allergyKey) {
		const allergy = new AllergyIndicator(this.game, allergyKey);
		allergy.x = this._portrait.x + 140;
		allergy.y = this._portrait.y - 90;
		return this.add(allergy);
	}

	_createAllergyIndicator() {
		const allergyIndicator = this.game.add.sprite(0, 0, "allergic");
		allergyIndicator.anchor.set(0, 1);
		allergyIndicator.scale.set(0.2);
		allergyIndicator.x = this._portrait.x + 60;
		allergyIndicator.y = this._portrait.y - 20;
		allergyIndicator.alpha = 0;
		return this.add(allergyIndicator);
	}

	_createSickIndicator() {
		const sickIndicator = this.game.add.sprite(0, 0, "sick");
		sickIndicator.anchor.set(0, 1);
		sickIndicator.scale.set(0.2);
		sickIndicator.x = this._portrait.x + 60;
		sickIndicator.y = this._portrait.y - 20;
		sickIndicator.alpha = 0;
		return this.add(sickIndicator);
	}

	_hideAllergy() {
		this._allergyIndicator.timerEvent = null;
		this.game.add.tween(this._allergyIndicator).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
	}

	_hideSickness() {
		this._sickIndicator.timerEvent = null;
		this.game.add.tween(this._sickIndicator).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
	}
}