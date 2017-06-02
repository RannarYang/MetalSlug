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
    private battleState: BattleState;

    public standingState: StandingState;
    public jumpingState: JumpingState;
    public squatingState: SquatingState;
    public movingState: MovingState;
    public squatMovingState: SquatMovingState;
    private _state: HeroineState;
    
    // 两个sprite: body, leg
    private bodySprite: Laya.Sprite;
    private legSprite: Laya.Sprite;
    private bombSprite: Laya.Sprite;

    // 是否处于攻击状态
    private isAttack: boolean = false;
    private attack_type: number = 0;
    private weapon = Weapon.Handgun;
    private advance_direction = AdvanceDirection.Left;

    constructor(battleState: BattleState){
        super();
        this.battleState = battleState;
        this.standingState = new StandingState(this);
        this.jumpingState = new JumpingState(this);
        this.squatingState = new SquatingState(this);
        this.movingState = new MovingState(this);
        this.squatMovingState = new SquatMovingState(this);

        this.init();
        this.setState(this.standingState);
    }
    public setX(x) {
        this.battleState.center(this.x, x - this.x);
        this.x = x;
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
        } else if (input === InputHandler.PressD) {
            this.isAttack = true;
        } else if (input === InputHandler.ReleaseD) {
            this.isAttack = false;
            this.attack_type = 0;
        }
        this._state.handleInput(input);
    }
    // 主角站着
    public stand(stand_type) {
        if (this.isAttack) {
            this.attackBody(stand_type);
        } else {
            this.standBody(stand_type);
        }
        this.standLeg(stand_type);
    }
    // 主角蹲着
    public squat(stand_type) {
        if (this.isAttack) {
            this.squatAttackBody(stand_type);
        } else {
            this.squatBody(stand_type);
        }
        this.squatLeg(stand_type);
    }
    // 主角跳跃 
    public jump(jump_type) {
        if (this.isAttack) {
            this.attackBody(jump_type);
        } else {
            this.jumpBody(jump_type);
        }
        this.jumpLeg(jump_type);
    }
    // 主角diving
    public dive(diving_type, leg_type) {
        if (this.isAttack) {
            this.attackBody(diving_type);
        } else {
            this.diveBody(diving_type);
        }
        this.jumpLeg(leg_type);
    }
    // 主角移动
    public move(stand_type, move_type){
        this.setChildIndex(this.bodySprite, 1);
        if (this.isAttack) {
            this.attackBody(stand_type);
        } else {
            this.standBody(stand_type);
        }
        this.moveLeg(move_type);
    }
    // 主角蹲着移动
    public squat_move(stand_type, move_type) {
        this.setChildIndex(this.legSprite, 1);
        if (this.isAttack) {
            this.squatAttackBody(stand_type);
        } else {
            this.squatBody(stand_type);
        }
        this.squat_moveLeg(move_type);
    }

    // 主角发射子弹
    private attact(attack_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.attackBody(attack_type);
        this.standLeg(attack_type);
    }

    // =================================================================================================== //
    private standBody(stand_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        this.bodySprite.x = 105;
        this.bodySprite.y = 473;
    }
    private standLeg(stand_type) {
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/stand/stand0.png');
        let body_width = this.bodySprite.getBounds().width;
        let leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 100+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    private squatBody(stand_type) {
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        this.bodySprite.x = 105;
        this.bodySprite.y = 473 + 15;
    }
    private squatLeg(stand_type) {
        let body_width = this.bodySprite.getBounds().width;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/squat/squat0.png');
        let leg_width = 33;
        this.legSprite.x = 100+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }

    private jumpBody(jump_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/jump/body' + jump_type + '.png');
        this.bodySprite.x = 75;
        this.bodySprite.y = 473;
    }
    private jumpLeg(jump_type) {
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/jump/jump_leg'+ jump_type +'.png');
        let leg_width = 33;
        let body_width = this.bodySprite.getBounds().width;
        this.legSprite.x = 84+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    private diveBody(diving_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/diving/body' + diving_type + '.png');
        this.bodySprite.x = 95;
        this.bodySprite.y = 477;
    }
    private moveLeg(move_type) {
        let body_width = this.bodySprite.getBounds().width;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/move/run'+ move_type +'.png');
        let leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 100+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    private squat_moveLeg(move_type) {
        let body_width = this.bodySprite.getBounds().width;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/squat_move/squat_run'+ move_type +'.png');
        let leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 103+(body_width-leg_width-16)/2;
        this.legSprite.y = 473+45;
    }
    private attackBody(attack_type) {
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/attack/attack' + this.attack_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 96;
        this.bodySprite.y = 473;
        if (this.attack_type === 4) {
            console.log('squat attack......');
            let bullet = new Bullet(this.x + this.bodySprite.x, this.y + this.bodySprite.y, 1);
            Laya.stage.addChild(bullet);
            bullet.fly();
            this.attack_type = 0;
        } else {
            this.attack_type ++;
        }
    }
    private squatAttackBody(attack_type) {
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/attack/attack' + this.attack_type + '.png');
        let body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 96;
        this.bodySprite.y = 473 + 15;
        if (this.attack_type === 4) {
            console.log('squat attack......');
            let bullet = new Bullet(this.x + this.bodySprite.x, this.y + this.bodySprite.y, 1, true);
            Laya.stage.addChild(bullet);
            bullet.fly();
            this.attack_type = 0;
        } else {
            this.attack_type ++;
        }
    }
    // ================================================================================================= //
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