var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(heroX, heroY) {
        var _this = _super.call(this) || this;
        _this.move_zadan_x = 0;
        _this.move_zadan_y = 0;
        _this.zadan_x = 0;
        _this.zadan_y = 0;
        _this.zadan_x = heroX;
        _this.zadan_y = heroY;
        return _this;
    }
    // 主角扔炸弹
    Bomb.prototype.throw = function () {
        var layAni = this.layAni = new Laya.Animation();
        layAni.loadAtlas('res/atlas/img/battleState/bomb/lay.json');
        layAni.interval = 100;
        layAni.index = 1;
        layAni.x = this.zadan_x;
        layAni.y = this.zadan_y;
        this.addChild(layAni);
        layAni.play();
        Laya.timer.loop(5, this, this.throw_zadan);
    };
    Bomb.prototype.throw_zadan = function () {
        if (this.move_zadan_x < 100) {
            this.move_zadan_x += 4;
            this.move_zadan_y -= 2;
        }
        else if (this.move_zadan_x >= 100 && this.move_zadan_x < 200) {
            this.move_zadan_x += 4;
            this.move_zadan_y += 2;
        }
        else {
            Laya.timer.clear(this, this.throw_zadan);
            var bang_zadan_x = this.zadan_x + this.move_zadan_x;
            var bang_zadan_y = this.zadan_y + this.move_zadan_y;
            this.removeChild(this.layAni);
            this.bang(bang_zadan_x, bang_zadan_y);
        }
        this.layAni.x = this.zadan_x + this.move_zadan_x;
        this.layAni.y = this.zadan_y + this.move_zadan_y;
    };
    Bomb.prototype.bang = function (x, y) {
        var _this = this;
        console.log('bang.........');
        var bangAni = new Laya.Animation();
        bangAni.loadAtlas('res/atlas/img/battleState/bomb/burst.json');
        bangAni.interval = 30;
        bangAni.index = 1;
        bangAni.x = x;
        bangAni.y = y - 120;
        this.addChild(bangAni);
        bangAni.play(1, false);
        bangAni.on(Laya.Event.COMPLETE, this, function () {
            _this.removeSelf();
        });
    };
    return Bomb;
}(Laya.Sprite));
//# sourceMappingURL=Bomb.js.map