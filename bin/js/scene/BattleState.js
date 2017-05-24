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
var BattleState = (function (_super) {
    __extends(BattleState, _super);
    function BattleState(controller) {
        var _this = _super.call(this) || this;
        _this._stateName = "BattleState";
        _this._controller = controller;
        Laya.stage.addChild(_this);
        return _this;
    }
    BattleState.prototype.getStateName = function () {
        return this._stateName;
    };
    BattleState.prototype.stateBegin = function () {
        // console.log('BattleState Begin...');
        // 设置按键的作用
        Laya.loader.load('res/config/commandConfig.json', Laya.Handler.create(this, this.loadedCommandConfigComplete));
    };
    BattleState.prototype.stateEnd = function () {
        // console.log('BattleState End...');
    };
    BattleState.prototype.stateUpdate = function () {
        // console.log('BattleState Update...');
    };
    BattleState.prototype.loadedCommandConfigComplete = function (data) {
        // console.log('data.......', data);
        if (data) {
            // console.log('loadedCommandConfigComplete');
            var commandConfig_json = Laya.Loader.getRes('res/config/commandConfig.json');
            var hero = new Heroine();
            this.addChild(hero);
            new InputHandler(hero, commandConfig_json);
        }
    };
    return BattleState;
}(Laya.Sprite));
//# sourceMappingURL=BattleState.js.map