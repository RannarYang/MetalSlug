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
var ShootCommand = (function (_super) {
    __extends(ShootCommand, _super);
    function ShootCommand(hero) {
        return _super.call(this, hero) || this;
    }
    ShootCommand.prototype.execute = function () {
        console.log('shoot...');
        this.hero.shoot();
    };
    return ShootCommand;
}(Command));
//# sourceMappingURL=ShootCommand.js.map