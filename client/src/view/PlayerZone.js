import { Conveyor } from "./Conveyor";
import { Portrait } from "./Portrait";
import { Stomach } from "./Stomach";
import { AllergyIndicator } from "./AllergyIndicator";

export class PlayerZone extends Phaser.Group {
	constructor(game, character) {
		super(game);

		this.game = game;

		this._conveyor = this._createConveyor();
		this._portrait = this._createPortrait(character.index);
		this._stomach = this._createStomach();
		this._allergyIndicator = this._createAllergyIndicator(character.allergy);
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

	_createConveyor() {
		const conveyor = new Conveyor(this.game);
		return this.add(conveyor);
	}

	_createPortrait(playerIndex) {
		const portrait = new Portrait(this.game, playerIndex);
		portrait.y = this._conveyor.getHeight() * 0.5 - 10;
		portrait.x = this._conveyor.getWidth();
		return this.add(portrait);
	}

	_createStomach() {
		const stomach = new Stomach(this.game);
		stomach.x =  this._conveyor.getWidth() + 250;
		stomach.y = 80;
		return this.add(stomach);
	}

	_createAllergyIndicator(allergyKey) {
		const allergyIndicator = new AllergyIndicator(this.game, allergyKey);
		allergyIndicator.x = this._portrait.x + 140;
		allergyIndicator.y = this._portrait.y - 90;
		return this.add(allergyIndicator);
	}
}