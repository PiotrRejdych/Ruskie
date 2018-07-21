export class FoodItem extends Phaser.Sprite {
    constructor(game, x, y, height, image) {
        super(game, x, y, image);

        this.scale.set(0.2);
        this.x = x - this.width/2;
        this.y = y - this.height;
        this.conveyorHeight = height;
    }

    update(){
        this.y += 4;
        if(this.y > this.conveyorHeight - this.height/2) this.destroy();
    }
}