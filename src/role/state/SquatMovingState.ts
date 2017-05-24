/*
* name;
*/
class SquatMovingState extends HeroineState{
    private squatmove_type: number = 0;
    constructor(hero: Heroine){
        super(hero);
    }
    public handleInput(input){
        if (input === InputHandler.ReleaseLeft || input === InputHandler.ReleaseRight) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.duckingState);
        } else if(input === InputHandler.ReleaseDown) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.movingState);
        }
    }
    public stateBegin() {
        console.log('moving......');
        this.hero.squat_move(0, 0);
    }
    public stateUpdate() {
        Laya.timer.loop(100, this, this.move);
    }
    public stateEnd() {
        this.squatmove_type = 0;
    }
    private move() {
        // if (this.move_type)
        if (this.squatmove_type !== 4) {
            this.squatmove_type++;
        } else {
            this.squatmove_type = 0;
        }
        this.hero.squat_move(0, this.squatmove_type);
        this.hero.x += 3;
    }
}