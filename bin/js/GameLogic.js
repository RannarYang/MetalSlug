// 程序入口
var GameLogic = (function () {
    function GameLogic() {
        Laya.init(1136, 640);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        laya.utils.Stat.show(0, 0);
        // 保持原始宽高比的情况下，将舞台铺满屏幕，超出比例的部分会有黑边
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        // 自动横屏
        // Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        this.init();
    }
    GameLogic.prototype.init = function () {
        // 场景状态
        var _sceneStateController = new SceneStateController();
        GroupLoader.loadGroup("startSceen", function () {
            _sceneStateController.setState(new BattleState(_sceneStateController));
        });
    };
    return GameLogic;
}());
new GameLogic();
//# sourceMappingURL=GameLogic.js.map