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
var SquatMovingState = (function (_super) {
    __extends(SquatMovingState, _super);
    function SquatMovingState(hero) {
        var _this = _super.call(this, hero) || this;
        _this.squatmove_type = 0;
        return _this;
    }
    SquatMovingState.prototype.handleInput = function (input) {
        if (input === InputHandler.ReleaseLeft || input === InputHandler.ReleaseRight) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.duckingState);
        }
        else if (input === InputHandler.ReleaseDown) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.movingState);
        }
    };
    SquatMovingState.prototype.stateBegin = function () {
        console.log('moving......');
        this.hero.squat_move(0, 0);
    };
    SquatMovingState.prototype.stateUpdate = function () {
        Laya.timer.loop(100, this, this.move);
    };
    SquatMovingState.prototype.stateEnd = function () {
        this.squatmove_type = 0;
    };
    SquatMovingState.prototype.move = function () {
        // if (this.move_type)
        if (this.squatmove_type !== 4) {
            this.squatmove_type++;
        }
        else {
            this.squatmove_type = 0;
        }
        this.hero.squat_move(0, this.squatmove_type);
        this.hero.x += 3;
    };
    return SquatMovingState;
}(HeroineState));
//# sourceMappingURL=SquatMovingState.js.map