var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* 要控制的角色;
*/
var AdvanceDirection;
(function (AdvanceDirection) {
    AdvanceDirection[AdvanceDirection["Right"] = 1] = "Right";
    AdvanceDirection[AdvanceDirection["Left"] = 2] = "Left";
})(AdvanceDirection || (AdvanceDirection = {}));
var Weapon;
(function (Weapon) {
    Weapon[Weapon["Handgun"] = 1] = "Handgun";
    Weapon[Weapon["Rifle"] = 2] = "Rifle";
})(Weapon || (Weapon = {}));
var GunDirection;
(function (GunDirection) {
})(GunDirection || (GunDirection = {}));
var Heroine = (function (_super) {
    __extends(Heroine, _super);
    function Heroine() {
        var _this = _super.call(this) || this;
        _this.weapon = Weapon.Handgun;
        _this.advance_direction = AdvanceDirection.Left;
        _this.standingState = new StandingState(_this);
        _this.jumpingState = new JumpingState(_this);
        _this.duckingState = new DuckingState(_this);
        _this.divingState = new DivingState(_this);
        _this.movingState = new MovingState(_this);
        _this.squatMovingState = new SquatMovingState(_this);
        _this.init();
        // this.setState(this.standingState);
        _this.attact(0);
        return _this;
    }
    Heroine.prototype.setState = function (state) {
        if (this._state != null) {
            this._state.stateEnd();
        }
        this._state = state;
        this._state.stateBegin();
        this._state.stateUpdate();
    };
    Heroine.prototype.handleInput = function (input) {
        if (input === InputHandler.PressLeft) {
            this.advance_direction = AdvanceDirection.Left;
        }
        else if (input === InputHandler.PressRight) {
            this.advance_direction = AdvanceDirection.Right;
        }
        // 扔炸弹
        if (input === InputHandler.PressF) {
            this.layBomb();
        }
        this._state.handleInput(input);
    };
    Heroine.prototype.goUp = function () {
    };
    Heroine.prototype.goDown = function () {
    };
    Heroine.prototype.goLeft = function () {
    };
    Heroine.prototype.goRight = function () {
    };
    Heroine.prototype.shoot = function () {
    };
    Heroine.prototype.dropBomb = function () {
    };
    // 主角站着
    Heroine.prototype.stand = function (stand_type) {
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        var body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/stand/stand0.png');
        var leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 100 + (body_width - leg_width - 16) / 2;
        this.legSprite.y = 473 + 45;
    };
    // 主角蹲着
    Heroine.prototype.squat = function (stand_type) {
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        var body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473 + 15;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/squat/squat0.png');
        var leg_width = 33;
        this.legSprite.x = 100 + (body_width - leg_width - 16) / 2;
        this.legSprite.y = 473 + 45;
    };
    // 主角跳跃
    Heroine.prototype.jump = function (jump_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/jump/body' + jump_type + '.png');
        var body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 75;
        this.bodySprite.y = 473;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/jump/jump_leg' + jump_type + '.png');
        var leg_width = 33;
        this.legSprite.x = 84 + (body_width - leg_width - 16) / 2;
        this.legSprite.y = 473 + 45;
    };
    // 主角diving
    Heroine.prototype.dive = function (diving_type, leg_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/diving/body' + diving_type + '.png');
        var body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 95;
        this.bodySprite.y = 477;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/jump/jump_leg' + leg_type + '.png');
        var leg_width = 33;
        this.legSprite.x = 84 + (body_width - leg_width - 16) / 2;
        this.legSprite.y = 473 + 45;
    };
    // 主角移动
    Heroine.prototype.move = function (stand_type, move_type) {
        console.log(this.x);
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        var body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/move/run' + move_type + '.png');
        var leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 100 + (body_width - leg_width - 16) / 2;
        this.legSprite.y = 473 + 45;
    };
    // 主角蹲着移动
    Heroine.prototype.squat_move = function (stand_type, move_type) {
        this.setChildIndex(this.legSprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/stand/body' + stand_type + '.png');
        var body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 105;
        this.bodySprite.y = 473 + 15;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/squat_move/squat_run' + move_type + '.png');
        var leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 103 + (body_width - leg_width - 16) / 2;
        this.legSprite.y = 473 + 45;
    };
    // 主角发射子弹
    Heroine.prototype.attact = function (attack_type) {
        this.setChildIndex(this.bodySprite, 1);
        this.bodySprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'body/attack/attack' + attack_type + '.png');
        var body_width = this.bodySprite.getBounds().width;
        this.bodySprite.x = 96;
        this.bodySprite.y = 473;
        this.legSprite.texture = Laya.loader.getRes(Heroine.imgUrl + 'leg/stand/stand0.png');
        var leg_width = this.legSprite.getBounds().width;
        this.legSprite.x = 100 + (body_width - leg_width - 16) / 2;
        this.legSprite.y = 473 + 45;
    };
    Heroine.prototype.layBomb = function () {
        var bomb = new Bomb(this.x + this.bodySprite.x, this.y + this.bodySprite.y);
        Laya.stage.addChild(bomb);
        bomb.throw();
    };
    Heroine.prototype.init = function () {
        this.bodySprite = new Laya.Sprite();
        this.bodySprite.loadImage(Heroine.imgUrl + 'body/stand/body0.png');
        this.addChild(this.bodySprite);
        this.legSprite = new Laya.Sprite();
        this.legSprite.loadImage(Heroine.imgUrl + 'leg/stand/stand0.png');
        this.addChild(this.legSprite);
    };
    return Heroine;
}(Laya.Sprite));
Heroine.imgUrl = "img/battleState/hero/";
//# sourceMappingURL=Heroine.js.map