export class FoodItem extends Phaser.Sprite {
    constructor(game, x, y, height, image) {
        super(game, x, y, image);

        this.scale.set(0.2);
        this.x = x - this.width/2;
        this.conveyorHeight = height;
    }

    update(){
        this.y++;
        if(this.y > this.conveyorHeight) this.destroy();
    }
}