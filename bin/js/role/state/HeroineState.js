/*
* 英雄状态基类;
*/
var HeroineState = (function () {
    function HeroineState(hero) {
        this.hero = hero;
    }
    HeroineState.prototype.handleInput = function (input) {
    };
    HeroineState.prototype.stateBegin = function () {
    };
    // state end
    HeroineState.prototype.stateEnd = function () {
    };
    // state update
    HeroineState.prototype.stateUpdate = function () {
    };
    return HeroineState;
}());
//# sourceMappingURL=HeroineState.js.map