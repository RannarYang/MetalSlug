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
* 站立状态;
*/
var StandingState = (function (_super) {
    __extends(StandingState, _super);
    function StandingState(hero) {
        var _this = _super.call(this, hero) || this;
        _this.stand_type = 0;
        return _this;
    }
    StandingState.prototype.handleInput = function (input) {
        // console.log('input......', input);
        if (input === InputHandler.PressUp) {
            this.hero.setState(this.hero.jumpingState);
        }
        else if (input === InputHandler.PressDown) {
            this.hero.setState(this.hero.duckingState);
        }
        else if (input === InputHandler.PressLeft || input === InputHandler.PressRight) {
            this.hero.setState(this.hero.movingState);
        }
    };
    StandingState.prototype.stateBegin = function () {
        // console.log('standing begin ...');
        this.hero.stand(0);
    };
    StandingState.prototype.stateUpdate = function () {
        this.stand_type = 0;
        Laya.timer.loop(350, this, this.stand);
    };
    StandingState.prototype.stand = function () {
        if (this.stand_type === 2) {
            this.stand_type = 0;
        }
        else {
            this.stand_type++;
        }
        this.hero.stand(this.stand_type);
    };
    StandingState.prototype.stateEnd = function () {
        // console.log('standing end ...');
        Laya.timer.clear(this, this.stand);
        this.stand_type = 0;
    };
    return StandingState;
}(HeroineState));
//# sourceMappingURL=StandingState.js.map