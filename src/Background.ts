/*
* name;
*/
class Background extends Laya.Sprite{
    constructor(){
        super();
        this.init();
    }
    private init() {
        for (let i = 0; i < 11; i++) {
            this.addBackground(i);
        }
    }
    private addBackground(i) {
        this.loadImage('img/battleState/background/map'+ i + '.jpg', 960 * i, 0);
    }
}