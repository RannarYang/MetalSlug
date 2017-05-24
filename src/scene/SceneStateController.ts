/*
* 场景状态控制者;
*/
class SceneStateController {
    private _state: ISceneState;
    private _runBegin: boolean = false;
    constructor(){

    }
    public setState(state: ISceneState) {
        this._runBegin = false;

        if (this._state != null) {
            this._state.stateEnd();
        }
        this._state = state;

        this.stateUpdate();
    }

    // 更新
    public stateUpdate() {
        // console.log('stateUpdate ============================================');
        // 通知新的state开始
        if (this._state !== null && this._runBegin == false) {
            this._state.stateBegin();
            this._runBegin = true;
        }

        if (this._state != null) {
            this._state.stateUpdate();
        }
    }
}