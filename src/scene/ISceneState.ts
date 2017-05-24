/*
* 场景接口;
*/
interface ISceneState {
    getStateName();
    // state begin
    stateBegin();
    // state end
    stateEnd();
    // state update
    stateUpdate();
}