/*
* name;
*/
class GoUpCommand extends Command{
    constructor(hero: Heroine){
        super(hero);
    }
    public execute() {
        console.log('go up...');
        this.hero.goUp();
    }
}