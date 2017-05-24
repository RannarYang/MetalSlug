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
var GoLeftCommand = (function (_super) {
    __extends(GoLeftCommand, _super);
    function GoLeftCommand(hero) {
        return _super.call(this, hero) || this;
    }
    GoLeftCommand.prototype.execute = function () {
        console.log('go left...');
        this.hero.goLeft();
    };
    return GoLeftCommand;
}(Command));
//# sourceMappingURL=GoLeftCommand.js.map