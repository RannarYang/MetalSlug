/*
* 要控制的角色;
*/
enum AdvanceDirection {
    Right = 1,
    Left
}
enum Weapon {
    Handgun = 1,
    Rifle = 2
}
enum GunDirection {

}
class Heroine extends Laya.Sprite{
    private static imgUrl: string = "img/battleState/hero/";
    public standingState: StandingState;
    public jumpingState: JumpingState;
    public duckingState: DuckingState;
    public divingState: DivingState;
    public movingState: MovingState;
    public squatMovingState: SquatMovingState;
    private _state: HeroineState;
    
    // 两个sprite: body, leg
    private bodySprite: Laya.Sprite;
    private legSprite: Laya.Sprite;
    private bombSprite: Laya.Sprite;

    private weapon = Weapon.Handgun;
    private advance_direction = AdvanceDirection.Left;

    constructor(){
        super();
        this.standingState = new StandingState(this);
        this.jumpingState = new JumpingState(this);
        this.duckingState = new DuckingState(this);
        this.divingState = new DivingState(this);
        this.movingState = new MovingState(this);
        this.squatMovingState = new SquatMovingState(this);

        this.init();
        this.setState(this.standingState);
    }
    public setState(state) {
        if (this._state != null) {
            this._state.stateEnd();
        }
        this._state = state;
        this._state.stateBegin();
        this._state.stateUpdate();
    }
    public handleInput(input) {
        if (input === InputHandler.PressLeft) {
            this.advance_direction = AdvanceDirection.Left;
        } else if(input === InputHandler.PressRight) {
            this.advance_direction = AdvanceDirection.Right;
        }
        // 扔炸弹
        if (input === InputHandler.PressF) {
            this.layBomb();
        }
        this._state.handleInput(input);
    }
    public goUp() {

    }
    public goDown() {

    }
    public goLeft() {

    }
    public goRight() {

    }
    public shoot() {

    }
    public dropBomb(){

    }
    // 主角站着
    public stand(stand_type) {
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/stand/stand0.png');
        let leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 100+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    // 主角蹲着
    public squat(stand_type) {
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473 + 15;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/squat/squat0.png');
        let leg_width = 33;
        this.legSprite.x = 100+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    // 主角跳跃
    public jump(jump_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/jump/body' + jump_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 75;
        this.bodySprite.y = 473;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/jump/jump_leg'+ jump_type +'.png');
        let leg_width = 33;
        this.legSprite.x = 84+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    // 主角diving
    public dive(diving_type, leg_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/diving/body' + diving_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 95;
        this.bodySprite.y = 477;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/jump/jump_leg'+ leg_type +'.png');
        let leg_width = 33;
        this.legSprite.x = 84+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    // 主角移动
    public move(stand_type, move_type){
        console.log(this.x);
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/move/run'+ move_type +'.png');
        let leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 100+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    // 主角蹲着移动
    public squat_move(stand_type, move_type) {
        this.setChildIndex(this.legSprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473 + 15;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/squat_move/squat_run'+ move_type +'.png');
        let leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 103+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    // 主角发射子弹
    private attact(attack_type) {
    }
    private layBomb() {
        let bomb = new Bomb(this.x + this.bodySprite.x, this.y + this.bodySprite.y);
        Laya.stage.addChild(bomb);
        bomb.throw();
    }
    private init() {
        this.bodySprite = new Laya.Sprite();
        this.bodySprite.loadImage(Heroine.imgUrl + 'body/stand/body0.png');
        this.addChild(this.bodySprite);
        this.legSprite = new Laya.Sprite();
        this.legSprite.loadImage(Heroine.imgUrl + 'leg/stand/stand0.png');
        this.addChild(this.legSprite);
    }
}