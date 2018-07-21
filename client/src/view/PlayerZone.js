import { Conveyor } from "./Conveyor";
import { Portrait } from "./Portrait";
import { Stomach } from "./Stomach";

export class PlayerZone extends Phaser.Group {
	constructor(game) {
		super(game);

		this.game = game;

		this._conveyor = this._createConveyor();
		this._portrait = this._createPortrait();
		this._stomach = this._createStomach();
	}

	spawnDish(dish) {
		this._conveyor.spawnDish(dish);
	}

	_createConveyor() {
		const conveyor = new Conveyor(this.game);
		return this.add(conveyor);
	}

	_createPortrait() {
		const portrait = new Portrait(this.game);
		portrait.y = this.game.height - 260;
		return this.add(portrait);
	}

	_createStomach() {
		const stomach = new Stomach(this.game);
		stomach.y = this.game.height - stomach.height / 2;
		return this.add(stomach);
	}
}