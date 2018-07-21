import { Conveyor } from "./Conveyor";
import { Portrait } from "./Portrait";
import { Stomach } from "./Stomach";

export class PlayerZone extends Phaser.Group {
	constructor(game) {
		super(game);

		this._conveyor = this._createConveyor(game);
		this._portrait = this._createPortrait(game);
		this._stomach = this._createStomach(game);
	}

	_createConveyor(game) {
		const conveyor = new Conveyor(game, 100, 100);
		return this.add(conveyor);
	}

	_createPortrait(game) {
		const portrait = new Portrait(game);
		return this.add(portrait);
	}

	_createStomach(game) {
		const stomach = new Stomach(game);
		stomach.y = game.height - stomach.height / 2;
		return this.add(stomach);
	}
}