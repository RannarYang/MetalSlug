/*
* name;
*/
class GoDownCommand extends Command{
    constructor(hero: Heroine){
        super(hero);
    }
    public execute() {
        console.log('go down...');
        this.hero.goDown();
    }
}