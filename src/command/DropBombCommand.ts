/*
* name;
*/
class DropBombCommand extends Command{
    constructor(hero: Heroine){
        super(hero);
    }
    public execute() {
        console.log('drop bomb......');
        this.hero.dropBomb();
    }
}