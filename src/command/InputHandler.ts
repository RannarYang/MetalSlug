/*
* name;
*/
class InputHandler{ 
    private _hero: Heroine;
    private _buttonA: Command;
    private _buttonB: Command;
    private _buttonC: Command;
    private _buttonD: Command;
    private _buttonE: Command;
    private _buttonF: Command;

    public static PressUp = 'PressUp';
    public static PressDown = 'PressDown';
    public static PressLeft = 'PressLeft';
    public static PressRight = 'PressRight';
    public static PressD = 'PressD';
    public static PressF = 'PressF';

    public static ReleaseUp = 'ReleaseUp';
    public static ReleaseDown = 'ReleaseDown';
    public static ReleaseLeft = 'ReleaseLeft';
    public static ReleaseRight = 'ReleaseRight';
    public static ReleaseD = 'ReleaseD';
    public static ReleaseF = 'ReleaseF';

    constructor(hero: Heroine, keyConfig){
        this._hero = hero;
        this._buttonA = new GoUpCommand(hero);
        this._buttonB = new GoLeftCommand(hero);
        this._buttonC = new GoDownCommand(hero);
        this._buttonD = new GoRightCommand(hero);
        this._buttonE = new ShootCommand(hero);
        this._buttonF = new DropBombCommand(hero);

        // 加入按键的作用
        Laya.stage.on(laya.events.Event.KEY_DOWN, this, this.onKeyDown);
        Laya.stage.on(laya.events.Event.KEY_PRESS, this, this.onKeyPress);
        Laya.stage.on(laya.events.Event.KEY_UP, this, this.onKeyUp);
    }
    private onKeyDown(e: Laya.Event) {
        switch(e.keyCode) {
            case Laya.Keyboard.UP:
                this._hero.handleInput(InputHandler.PressUp);
            break;
            case Laya.Keyboard.DOWN:
                this._hero.handleInput(InputHandler.PressDown);
            break;
            case Laya.Keyboard.LEFT:
                this._hero.handleInput(InputHandler.PressLeft);
            break;
            case Laya.Keyboard.RIGHT:
                this._hero.handleInput(InputHandler.PressRight);
            break;
            case Laya.Keyboard.D:
                this._hero.handleInput(InputHandler.PressD);
            break;
            case Laya.Keyboard.F:
                this._hero.handleInput(InputHandler.PressF);
            break;
        }
    }
    private onKeyPress(e: Laya.Event) {
        switch(e.keyCode) {
            case Laya.Keyboard.UP:
                this._hero.handleInput(InputHandler.PressUp);
            break;
            case Laya.Keyboard.DOWN:
                this._hero.handleInput(InputHandler.PressDown);
            break;
            case Laya.Keyboard.LEFT:
                this._hero.handleInput(InputHandler.PressLeft);
            break;
            case Laya.Keyboard.RIGHT:
                this._hero.handleInput(InputHandler.PressRight);
            break;
            case Laya.Keyboard.D:
                this._hero.handleInput(InputHandler.PressD);
            break;
            case Laya.Keyboard.F:
                this._hero.handleInput(InputHandler.PressF);
            break;
        }
    }
    private onKeyUp(e: Laya.Event) {
        switch(e.keyCode) {
            case Laya.Keyboard.UP:
                this._hero.handleInput(InputHandler.ReleaseUp);
            break;
            case Laya.Keyboard.DOWN:
                this._hero.handleInput(InputHandler.ReleaseDown);
            break;
            case Laya.Keyboard.LEFT:
                this._hero.handleInput(InputHandler.ReleaseLeft);
            break;
            case Laya.Keyboard.RIGHT:
                this._hero.handleInput(InputHandler.ReleaseRight);
            break;
            case Laya.Keyboard.D:
                this._hero.handleInput(InputHandler.ReleaseD);
            break;
            case Laya.Keyboard.F:
                this._hero.handleInput(InputHandler.ReleaseF);
            break;
        }
    }
}