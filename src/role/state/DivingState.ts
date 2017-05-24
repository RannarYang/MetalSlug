/*
* name;
*/
class DivingState extends HeroineState{
    constructor(hero: Heroine){
        super(hero);
    }
    public InputHandler(input) {
        if (input === InputHandler.ReleaseDown) {
            // Laya.timer.clearAll(this);
            this.hero.setState(this.hero.jumpingState);
            // this.isDiving = true;
        }
    }
    public stateBegin() {
        console.log('diving...');
        // this.hero.diving(3);
    }
    public stateUpdate() {
        
    }
    public stateEnd() {
        console.log('diving end...');
    }
}