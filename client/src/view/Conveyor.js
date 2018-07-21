export class Conveyor extends Phaser.Group {
	constructor(game, x, y) {
		super(game);

		this.x = x;
		this.y = y;

		this.backgroundImage = this.game.add.sprite(this.x, this.y, 'conveyorBelt');
		this.backgroundImage.scale.setTo(0.3, 0.3);
	}

}