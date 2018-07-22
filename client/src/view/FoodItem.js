export class FoodItem extends Phaser.Sprite {
    constructor(game, dish) {
        super(game, 0, 0, dish.key);
        this.dish = dish;

        this.scale.set(0.3);

        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;

        this.angle = Math.random() * 100;
    }
}