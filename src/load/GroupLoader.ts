/*
* 加载类;
*/
class GroupLoader {
    public static isloading: boolean = false;
    private static hasLoadedGroup: string[] = [];
    private static onComplete: Function;
    private static init() {
        // console.log('this.init..........................');
        // 缓存hero动画
        let heroImgUrl = 'img/battleState/hero/';
        // jump_body
        // Laya.Animation.createFrames([heroImgUrl + "body/jump/body0.png", heroImgUrl + "body/jump/body1.png", heroImgUrl + "body/jump/body2.png", heroImgUrl + "body/jump/body3.png", heroImgUrl + "body/jump/body4.png", heroImgUrl + "body/jump/body5.png", heroImgUrl + "body/jump/body6.png"], "jump");
        // jump_leg

        this.isloading = false;
        this.onComplete();
    }
    public static loadGroup(loadSceneName: string, onComplete: Function) {
        this.isloading = true;
        this.onComplete = onComplete;
        var res: Array<any> = [
            "img/startState/open/open0.png",
            {url: "res/atlas/img/startState.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/startState/open.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/body/stand.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/body/jump.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/body/diving.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/leg/stand.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/leg/jump.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/leg/squat.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/leg/move.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/hero/leg/squat_move.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/bomb/lay.json", type: Laya.Loader.ATLAS},
            {url: "res/atlas/img/battleState/bomb/burst.json", type: Laya.Loader.ATLAS},
        ];
        Laya.loader.load(res, null, Laya.Handler.create(this, this.onLoaded, null, false));
    }
    private static onLoaded(data) {
        if (data === 1) {
            Laya.timer.once(1000,this,this.init);
        }
    }
}