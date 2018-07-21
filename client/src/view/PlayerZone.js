import { Conveyor } from "./Conveyor";
import { Portrait } from "./Portrait";
import { Stomach } from "./Stomach";

export class PlayerZone extends Phaser.Group {
	constructor(game, playerIndex) {
		super(game);

		this.game = game;

		this._conveyor = this._createConveyor();
		this._portrait = this._createPortrait(playerIndex);
		this._stomach = this._createStomach();
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
		portrait.x = this._conveyor.getWidth() + 80;
		return this.add(portrait);
	}

	_createStomach() {
		const stomach = new Stomach(this.game);
		stomach.x =  this._conveyor.getWidth() + 250;
		stomach.y = 80;
		return this.add(stomach);
	}
}