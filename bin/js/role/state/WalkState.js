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
var WalkState = (function (_super) {
    __extends(WalkState, _super);
    function WalkState(hero) {
        return _super.call(this, hero) || this;
    }
    WalkState.prototype.handleInput = function (input) {
        switch (input) {
            // 向左走
            case 'goAhead':
                break;
            // 向右走
            case 'goBack':
                break;
            // 蹲下
            case 'squat':
                break;
            // 跳跃
            case 'jump':
                break;
        }
    };
    WalkState.prototype.stateBegin = function () {
        console.log('walking...');
    };
    return WalkState;
}(HeroineState));
//# sourceMappingURL=WalkState.js.map