/*
* 命令的基类;
*/
class Command{
    protected hero: Heroine;
    constructor(hero: Heroine){
        this.hero = hero;
    }
    public execute() {
        
    }
}