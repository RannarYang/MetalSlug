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
var DivingState = (function (_super) {
    __extends(DivingState, _super);
    function DivingState(hero) {
        return _super.call(this, hero) || this;
    }
    DivingState.prototype.InputHandler = function (input) {
        if (input === InputHandler.ReleaseDown) {
            // Laya.timer.clearAll(this);
            this.hero.setState(this.hero.jumpingState);
            // this.isDiving = true;
        }
    };
    DivingState.prototype.stateBegin = function () {
        console.log('diving...');
        // this.hero.diving(3);
    };
    DivingState.prototype.stateUpdate = function () {
    };
    DivingState.prototype.stateEnd = function () {
        console.log('diving end...');
    };
    return DivingState;
}(HeroineState));
//# sourceMappingURL=DivingState.js.map