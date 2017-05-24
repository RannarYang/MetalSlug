/*
* name;
*/
var InputHandler = (function () {
    function InputHandler(hero, keyConfig) {
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
    InputHandler.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
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
    };
    InputHandler.prototype.onKeyPress = function (e) {
        switch (e.keyCode) {
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
    };
    InputHandler.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
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
    };
    return InputHandler;
}());
InputHandler.PressUp = 'PressUp';
InputHandler.PressDown = 'PressDown';
InputHandler.PressLeft = 'PressLeft';
InputHandler.PressRight = 'PressRight';
InputHandler.PressD = 'PressD';
InputHandler.PressF = 'PressF';
InputHandler.ReleaseUp = 'ReleaseUp';
InputHandler.ReleaseDown = 'ReleaseDown';
InputHandler.ReleaseLeft = 'ReleaseLeft';
InputHandler.ReleaseRight = 'ReleaseRight';
InputHandler.ReleaseD = 'ReleaseD';
InputHandler.ReleaseF = 'ReleaseF';
//# sourceMappingURL=InputHandler.js.map