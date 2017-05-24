/*
* name;
*/
class StartState extends ui.StartStateSceenUI  implements ISceneState {
    private _stateName: string = "StartState";
    private _controller: SceneStateController ;
    constructor(controller: SceneStateController){
        super();
        this._controller = controller;
        Laya.stage.addChild(this);
    }
    public getStateName() {
        return this._stateName;
    }
    public stateBegin() {
        console.log('StartState Begin...');
        // Laya.timer
        this.intro_ani.play(0, false);
        this.intro_ani.on(Laya.Event.COMPLETE, this, ()=>{
            console.log('end .......');
        });
        this.startBtn.on(Laya.Event.CLICK, this, this.tap_start);
    }
    public stateEnd(){
        console.log('StartState End...');
        this.removeSelf();
    }
    public stateUpdate() {
        console.log('StateState Update...');
    }

    private tap_start() {
        console.log('tap start......');
        this._controller.setState(new BattleState(this._controller));
    }
}