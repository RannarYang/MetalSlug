/*
* 站立状态;
*/
class StandingState extends HeroineState{
    private stand_type: number = 0;
    constructor(hero: Heroine){
        super(hero);
    }
    public handleInput(input){
        // console.log('input......', input);
        if (input === InputHandler.PressUp) {
            this.hero.setState(this.hero.jumpingState);
        } else if (input === InputHandler.PressDown) {
            this.hero.setState(this.hero.duckingState);
        } else if (input === InputHandler.PressLeft || input === InputHandler.PressRight) {
            this.hero.setState(this.hero.movingState);
        }
    }
    public stateBegin() {
        // console.log('standing begin ...');
        this.hero.stand(0);
    }
    public stateUpdate() {
        this.stand_type = 0
        Laya.timer.loop(350, this, this.stand);
    }
    private stand() {
        if (this.stand_type === 2) {
            this.stand_type = 0;
        } else {
            this.stand_type++;
        }
        this.hero.stand(this.stand_type);
        
    }
    public stateEnd() {
        // console.log('standing end ...');
        Laya.timer.clear(this, this.stand);
        this.stand_type = 0;
    }
}