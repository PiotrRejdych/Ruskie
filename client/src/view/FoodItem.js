export class FoodItem extends Phaser.Sprite {
    constructor(game, x, y, height, image) {
        super(game, x, y, image);

        this.scale.set(0.2);

        this.pivot.x = image.width / 2;
        this.pivot.y = image.height / 2;

        this.angle = Math.random() * 100;
        this.conveyorHeight = height;
    }

    update(){
        this.y += 4;
        if(this.y > this.conveyorHeight - this.height/2) this.destroy();
    }
}