/*
* name;
*/
class GoLeftCommand extends Command{
    constructor(hero: Heroine){
        super(hero);
    }
    public execute() {
        console.log('go left...');
        this.hero.goLeft();
    }
}