/*
* 场景状态控制者;
*/
var SceneStateController = (function () {
    function SceneStateController() {
        this._runBegin = false;
    }
    SceneStateController.prototype.setState = function (state) {
        this._runBegin = false;
        if (this._state != null) {
            this._state.stateEnd();
        }
        this._state = state;
        this.stateUpdate();
    };
    // 更新
    SceneStateController.prototype.stateUpdate = function () {
        // console.log('stateUpdate ============================================');
        // 通知新的state开始
        if (this._state !== null && this._runBegin == false) {
            this._state.stateBegin();
            this._runBegin = true;
        }
        if (this._state != null) {
            this._state.stateUpdate();
        }
    };
    return SceneStateController;
}());
//# sourceMappingURL=SceneStateController.js.map