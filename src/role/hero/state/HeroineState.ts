/*
* 英雄状态基类;
*/
class HeroineState{
    protected hero: Heroine;
    constructor(hero: Heroine){
        this.hero = hero;
    }
    public handleInput(input){
    }
    public stateBegin(){

    }
    // state end
    public stateEnd() {

    }
    // state update
    public stateUpdate(){

    }
}