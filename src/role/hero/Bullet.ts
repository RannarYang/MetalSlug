/*
* name;
*/
class Bullet extends Laya.Sprite{
    private bullet_position_x: number = 0;
    private bullet_position_y: number = 0;
    private bullet_type: number = 0;
    private bulletSprite: Laya.Sprite;
    constructor(heroX: number, heroY: number, bullet_type: number = 1, isSquat: boolean = false){
        super();
        this.bullet_position_x = heroX + 100;
        this.bullet_position_y = isSquat ? heroY + 15: heroY + 20;
    }

    public fly() {	
        let bulletSprite = this.bulletSprite = new Laya.Sprite();
        bulletSprite.loadImage('img/battleState/bullet/bullet' + this.bullet_type + '.png');
        bulletSprite.x = this.bullet_position_x;
        bulletSprite.y = this.bullet_position_y;
        this.addChild(bulletSprite);
        Laya.timer.loop(50, this, this.bullet_fly)
    }
    private bullet_fly() {
        this.bulletSprite.x += 20;
        if(this.bulletSprite.x > this.bullet_position_x + 500) {
            Laya.timer.clear(this, this.bullet_fly);
            this.removeSelf();
        }
    }
}