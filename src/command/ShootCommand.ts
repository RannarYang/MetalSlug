/*
* name;
*/
class ShootCommand extends Command{
    constructor(hero: Heroine){
        super(hero);
    }
    public execute() {
        console.log('shoot...');
        this.hero.shoot();
    }
}