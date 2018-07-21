import { Conveyor } from "./Conveyor";
import { Portrait } from "./Portrait";
import { Stomach } from "./Stomach";

export class PlayerZone extends Phaser.Group {
	constructor(game, playerIndex) {
		super(game);

		this.game = game;

		this._conveyor = this._createConveyor(playerIndex);
		this._portrait = this._createPortrait(playerIndex);
		this._stomach = this._createStomach(playerIndex);
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

	_createConveyor(playerIndex) {
		const conveyor = new Conveyor(this.game, playerIndex);
		return this.add(conveyor);
	}

	_createPortrait(playerIndex) {
		const portrait = new Portrait(this.game, playerIndex);
		portrait.y = this.game.height - 260;
		portrait.x = this._conveyor.getWidth() * 0.5;
		return this.add(portrait);
	}

	_createStomach(playerIndex) {
		const stomach = new Stomach(this.game, playerIndex);
		stomach.y = this.game.height - stomach.height / 2;
		return this.add(stomach);
	}
}