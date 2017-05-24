/*
* 跳跃状态;
*/
class JumpingState extends HeroineState{
    private jump_type: number = 0;
    private isDiving: boolean = false;
    private isForward: boolean = false;
    private diving_type: number = 0;
    private time : number = 0;
    private time1 : number = 0;
    private static gavity: number = 0.8;
    private static vy: number = 14;
    constructor(hero: Heroine){
        super(hero);
    }
    public handleInput(input){ 
        if (input === InputHandler.PressDown) {
            // Laya.timer.clearAll(this);
            // this.hero.setState(this.hero.divingState);
            this.isDiving = true;
        } else if (input === InputHandler.ReleaseDown) {
            this.isDiving = false;
        } else if (input === InputHandler.PressRight) {
            this.isForward = true;
        } else if (input === InputHandler.ReleaseRight) {
            this.isForward = false
        } 
    }
    public stateBegin() {
        console.log('jumping...');
        this.hero.jump(0);
    }
    public stateUpdate() {
        this.time = 0;
        this.time1 = 0.5;
        Laya.timer.loop(20, this, this.jump);
    }
    private jump() {
        console.log('jumping......');
        this.time++;
        this.time1 += 0.5;
        this.hero.y = - (JumpingState.vy * this.time1 - 1/2 * JumpingState.gavity * this.time1 * this.time1);
        console.log(this.hero.y);
        if (this.isForward) {
            this.hero.x += 4;
        }
        if (this.time === 3) {
            if (this.jump_type !== 6) {
                this.jump_type++;
            }
            this.playBody();
            this.time = 0;
        }
        if (JumpingState.vy - JumpingState.gavity * this.time1 < 0) {
            Laya.timer.clear(this, this.jump);
            this.time1 = 0.5;
            Laya.timer.loop(20, this, this.down);
        }
    }
    private playBody() {
        if (this.isDiving) {
            if (this.diving_type !== 3) {
                this.diving_type++;
            }
            this.hero.dive(this.diving_type, this.jump_type);
        } else {
            this.hero.jump(this.jump_type);
        }
    }
    private down() {
        console.log('down.......');
        if (this.isForward) {
            this.hero.x += 4;
        }
        let y =  1/2 * JumpingState.gavity * this.time1 * this.time1;
        this.time1 += 0.6;
        if (this.hero.y + y < 0) {
            this.hero.y += y;
            if (this.isDiving) {
                if (this.diving_type !== 3) {
                    this.diving_type++;
                }
                this.hero.dive(this.diving_type, this.jump_type);
            }
        } else {
            Laya.timer.clear(this, this.down);
            this.hero.y = 0;
            this.jump_type = 0;
            this.diving_type = 0;
            this.isDiving = false;
            this.time1 = 0;
            this.hero.setState(this.hero.standingState);
        }
        
    }
    public stateEnd() {
        console.log('jumping stateEnd.............');
    }
}