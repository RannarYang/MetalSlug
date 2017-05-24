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
* 跳跃状态;
*/
var JumpingState = (function (_super) {
    __extends(JumpingState, _super);
    function JumpingState(hero) {
        var _this = _super.call(this, hero) || this;
        _this.jump_type = 0;
        _this.isDiving = false;
        _this.isForward = false;
        _this.diving_type = 0;
        _this.time = 0;
        _this.time1 = 0;
        return _this;
    }
    JumpingState.prototype.handleInput = function (input) {
        if (input === InputHandler.PressDown) {
            // Laya.timer.clearAll(this);
            // this.hero.setState(this.hero.divingState);
            this.isDiving = true;
        }
        else if (input === InputHandler.ReleaseDown) {
            this.isDiving = false;
        }
        else if (input === InputHandler.PressRight) {
            this.isForward = true;
        }
        else if (input === InputHandler.ReleaseRight) {
            this.isForward = false;
        }
    };
    JumpingState.prototype.stateBegin = function () {
        console.log('jumping...');
        this.hero.jump(0);
    };
    JumpingState.prototype.stateUpdate = function () {
        this.time = 0;
        this.time1 = 0.5;
        Laya.timer.loop(20, this, this.jump);
    };
    JumpingState.prototype.jump = function () {
        console.log('jumping......');
        this.time++;
        this.time1 += 0.5;
        this.hero.y = -(JumpingState.vy * this.time1 - 1 / 2 * JumpingState.gavity * this.time1 * this.time1);
        console.log(this.hero.y);
        if (this.isForward) {
            this.hero.x += 4;
        }
        if (this.time === 3) {
            if (this.jump_type !== 6) {
                this.jump_type++;
            }
            this.playBody();
            this.time = 0;
        }
        if (JumpingState.vy - JumpingState.gavity * this.time1 < 0) {
            Laya.timer.clear(this, this.jump);
            this.time1 = 0.5;
            Laya.timer.loop(20, this, this.down);
        }
    };
    JumpingState.prototype.playBody = function () {
        if (this.isDiving) {
            if (this.diving_type !== 3) {
                this.diving_type++;
            }
            this.hero.dive(this.diving_type, this.jump_type);
        }
        else {
            this.hero.jump(this.jump_type);
        }
    };
    JumpingState.prototype.down = function () {
        console.log('down.......');
        if (this.isForward) {
            this.hero.x += 4;
        }
        var y = 1 / 2 * JumpingState.gavity * this.time1 * this.time1;
        this.time1 += 0.6;
        if (this.hero.y + y < 0) {
            this.hero.y += y;
            if (this.isDiving) {
                if (this.diving_type !== 3) {
                    this.diving_type++;
                }
                this.hero.dive(this.diving_type, this.jump_type);
            }
        }
        else {
            Laya.timer.clear(this, this.down);
            this.hero.y = 0;
            this.jump_type = 0;
            this.diving_type = 0;
            this.isDiving = false;
            this.time1 = 0;
            this.hero.setState(this.hero.standingState);
        }
    };
    JumpingState.prototype.stateEnd = function () {
        console.log('jumping stateEnd.............');
    };
    return JumpingState;
}(HeroineState));
JumpingState.gavity = 0.8;
JumpingState.vy = 14;
//# sourceMappingURL=JumpingState.js.map