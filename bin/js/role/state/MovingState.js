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
* name;
*/
var MovingState = (function (_super) {
    __extends(MovingState, _super);
    function MovingState(hero) {
        var _this = _super.call(this, hero) || this;
        _this.move_type = 0;
        return _this;
    }
    MovingState.prototype.handleInput = function (input) {
        if (input === InputHandler.ReleaseLeft || input === InputHandler.ReleaseRight) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.standingState);
        }
        else if (input === InputHandler.PressDown) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.squatMovingState);
        }
    };
    MovingState.prototype.stateBegin = function () {
        this.hero.move(0, 0);
    };
    MovingState.prototype.stateUpdate = function () {
        Laya.timer.loop(100, this, this.move);
    };
    MovingState.prototype.stateEnd = function () {
        this.move_type = 0;
    };
    MovingState.prototype.move = function () {
        // if (this.move_type)
        if (this.move_type !== 8) {
            this.move_type++;
        }
        else {
            this.move_type = 0;
        }
        this.hero.move(0, this.move_type);
        this.hero.x += 6;
        console.log('moving......', this.hero.x);
    };
    return MovingState;
}(HeroineState));
//# sourceMappingURL=MovingState.js.map