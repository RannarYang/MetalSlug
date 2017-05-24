/*
* name;
*/
class MovingState extends HeroineState{
    private move_type: number = 0;
    constructor(hero: Heroine){
        super(hero);
    }
    public handleInput(input){
        if (input === InputHandler.ReleaseLeft || input === InputHandler.ReleaseRight) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.standingState);
        } else if (input === InputHandler.PressDown) {
            Laya.timer.clear(this, this.move);
            this.hero.setState(this.hero.squatMovingState);
        }
    }
    public stateBegin() {
        this.hero.move(0, 0);
    }
    public stateUpdate() {
        Laya.timer.loop(100, this, this.move);
    }
    public stateEnd() {
        this.move_type = 0;
    }
    private move() {
        // if (this.move_type)
        if (this.move_type !== 8) {
            this.move_type++;
        } else {
            this.move_type = 0;
        }
        this.hero.move(0, this.move_type);
        this.hero.x += 6;
        console.log('moving......' ,this.hero.x);
    }
}