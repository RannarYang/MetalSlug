/*
* 命令的基类;
*/
var Command = (function () {
    function Command(hero) {
        this.hero = hero;
    }
    Command.prototype.execute = function () {
    };
    return Command;
}());
//# sourceMappingURL=Command.js.map