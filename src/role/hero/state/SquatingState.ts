/*
* 躲避状态,下蹲状态;
*/
class SquatingState extends HeroineState{
    constructor(hero: Heroine){
        super(hero);
    }
    public handleInput(input){
        if (input === InputHandler.ReleaseDown) {
            // change to standing state;
            this.hero.setState(this.hero.standingState);
        } else if (input === InputHandler.PressRight || input === InputHandler.PressLeft) {
            this.hero.setState(this.hero.squatMovingState);
        }
    }
    public stateBegin() {
        // console.log('ducking...');
        this.hero.squat(0);
        
    }
    public stateUpdate() {
        Laya.timer.loop(100, this, this.squat);
    }
    public stateEnd() {
        Laya.timer.clear(this, this.squat);
    }
    private squat() {
        this.hero.squat(0);
    }

}