/*
* name;
*/
class Bomb extends Laya.Sprite{
    private move_zadan_x: number = 0;
    private move_zadan_y: number = 0;
    private zadan_x: number = 0;
    private zadan_y: number = 0;
    private layAni: Laya.Animation;
    constructor(heroX, heroY){
        super();
        this.zadan_x = heroX;
        this.zadan_y = heroY;
    }
    // 主角扔炸弹
    public throw() {
        let layAni = this.layAni = new Laya.Animation();
        layAni.loadAtlas('res/atlas/img/battleState/bomb/lay.json');
        layAni.interval = 100;
        layAni.index = 1;
        layAni.x = this.zadan_x;
        layAni.y = this.zadan_y;
        this.addChild(layAni);
        layAni.play();
        Laya.timer.loop(5, this, this.throw_zadan)
    }

    private throw_zadan() {
        if(this.move_zadan_x<100){
            this.move_zadan_x+=4;
            this.move_zadan_y-=2;
        }else if(this.move_zadan_x>=100&&this.move_zadan_x<200){
            this.move_zadan_x+=4;
            this.move_zadan_y+=2;				
        }else{
            Laya.timer.clear(this, this.throw_zadan);
            let bang_zadan_x = this.zadan_x + this.move_zadan_x;
            let bang_zadan_y = this.zadan_y + this.move_zadan_y;
            this.removeChild(this.layAni);
            this.bang(bang_zadan_x, bang_zadan_y);
        }
        this.layAni.x = this.zadan_x + this.move_zadan_x;
        this.layAni.y = this.zadan_y + this.move_zadan_y;
    }
    private bang(x, y) {
        console.log('bang.........');
        let bangAni = new Laya.Animation();
        bangAni.loadAtlas('res/atlas/img/battleState/bomb/burst.json');
        bangAni.interval = 30;
        bangAni.index = 1;
        bangAni.x = x;
        bangAni.y = y - 120;
        this.addChild(bangAni);
        bangAni.play(1, false);
        bangAni.on(Laya.Event.COMPLETE, this, ()=>{
            this.removeSelf();
        })
    }
}