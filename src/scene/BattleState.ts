/*
* name;
*/
class BattleState extends Laya.Sprite implements ISceneState{
    private _stateName: string = "BattleState";
    private _controller: SceneStateController ;
    private _hero: Heroine;
    private _inputHandler: InputHandler;
    constructor(controller: SceneStateController){
        super();
        this._controller = controller;
        Laya.stage.addChild(this);
    }
    public getStateName() {
        return this._stateName;
    }
    public stateBegin() {
        // console.log('BattleState Begin...');
        // 设置按键的作用
        Laya.loader.load('res/config/commandConfig.json', Laya.Handler.create(this, this.loadedCommandConfigComplete));
    }

    public stateEnd(){
        // console.log('BattleState End...');
    }
    public stateUpdate() {
        // console.log('BattleState Update...');
    }
    private loadedCommandConfigComplete(data) {
        // console.log('data.......', data);
        if (data) {
            // console.log('loadedCommandConfigComplete');
            let commandConfig_json = Laya.Loader.getRes('res/config/commandConfig.json');
            let hero = new Heroine();
            this.addChild(hero);
            new InputHandler(hero, commandConfig_json);
        }
    }
}