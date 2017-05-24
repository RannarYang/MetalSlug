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
var StartState = (function (_super) {
    __extends(StartState, _super);
    function StartState(controller) {
        var _this = _super.call(this) || this;
        _this._stateName = "StartState";
        _this._controller = controller;
        Laya.stage.addChild(_this);
        return _this;
    }
    StartState.prototype.getStateName = function () {
        return this._stateName;
    };
    StartState.prototype.stateBegin = function () {
        console.log('StartState Begin...');
        // Laya.timer
        this.intro_ani.play(0, false);
        this.intro_ani.on(Laya.Event.COMPLETE, this, function () {
            console.log('end .......');
        });
        this.startBtn.on(Laya.Event.CLICK, this, this.tap_start);
    };
    StartState.prototype.stateEnd = function () {
        console.log('StartState End...');
        this.removeSelf();
    };
    StartState.prototype.stateUpdate = function () {
        console.log('StateState Update...');
    };
    StartState.prototype.tap_start = function () {
        console.log('tap start......');
        this._controller.setState(new BattleState(this._controller));
    };
    return StartState;
}(ui.StartStateSceenUI));
//# sourceMappingURL=StartState.js.map