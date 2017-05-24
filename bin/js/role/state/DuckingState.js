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
* 躲避状态,下蹲状态;
*/
var DuckingState = (function (_super) {
    __extends(DuckingState, _super);
    function DuckingState(hero) {
        return _super.call(this, hero) || this;
    }
    DuckingState.prototype.handleInput = function (input) {
        if (input === InputHandler.ReleaseDown) {
            // change to standing state;
            this.hero.setState(this.hero.standingState);
        }
        else if (input === InputHandler.PressRight || input === InputHandler.PressLeft) {
            this.hero.setState(this.hero.squatMovingState);
        }
    };
    DuckingState.prototype.stateBegin = function () {
        // console.log('ducking...');
        this.hero.squat(0);
    };
    DuckingState.prototype.update = function () {
    };
    return DuckingState;
}(HeroineState));
//# sourceMappingURL=DuckingState.js.map