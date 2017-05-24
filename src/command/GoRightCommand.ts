/*
* name;
*/
class GoRightCommand extends Command{
    constructor(hero: Heroine){
        super(hero);
    }
    public execute() {
        console.log('go right...');
        this.hero.goRight();
    }
}