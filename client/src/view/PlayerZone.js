import { Conveyor } from "./Conveyor";
import { Portrait } from "./Portrait";
import { Stomach } from "./Stomach";

export class PlayerZone extends Phaser.Group {
	constructor(game, x, y) {
		super(game);

		this.x_coordinate = x;
		this.y_coordinate = y;
		this._conveyor = this._createConveyor(game, this.x_coordinate, this.y_coordinate);
		this._portrait = this._createPortrait(game, this.x_coordinate, this.y_coordinate);
		this._stomach = this._createStomach(game, this.x_coordinate, this.y_coordinate);
	}

	_createConveyor(game, x, y) {
		const conveyor = new Conveyor(game);
		conveyor.x = x;
		conveyor.y = y;
		return this.add(conveyor);
	}

	_createPortrait(game, x, y) {
		const portrait = new Portrait(game);
		portrait.y = game.height - 260;
		portrait.x = x;
		return this.add(portrait);
	}

	_createStomach(game, x, y) {
		const stomach = new Stomach(game);
		stomach.y = game.height - stomach.height / 2;
		stomach.x = x;
		return this.add(stomach);
	}
}