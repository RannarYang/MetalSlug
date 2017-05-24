/*
* 加载类;
*/
var Load = (function () {
    function Load() {
    }
    Load.init = function () {
        this.isloading = false;
        this.onComplete();
    };
    Load.loadGroup = function (loadSceneName, onComplete) {
        this.isloading = true;
        this.onComplete = onComplete;
        var res = [
            // "res/atlas/img/map.jpg", // 背景图片
            // "res/atlas/img/explain.png", // 操作说明
            // "res/atlas/img/gaobai.png", // 告白
            { url: "res/atlas/img/open.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/img.json", type: Laya.Loader.ATLAS },
        ];
        Laya.loader.load(res, null, Laya.Handler.create(this, this.onLoaded, null, false));
    };
    Load.onLoaded = function (data) {
        console.log(data);
        if (data === 1) {
            Laya.timer.once(1000, this, this.init);
        }
    };
    return Load;
}());
Load.isloading = false;
Load.hasLoadedGroup = [];
//# sourceMappingURL=Load.js.map