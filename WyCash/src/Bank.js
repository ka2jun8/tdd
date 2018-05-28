"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pair_1 = require("./Pair");
var Bank = /** @class */ (function () {
    function Bank() {
        this.rates = {};
    }
    Bank.prototype.reduce = function (source, to) {
        return source.reduce(this, to);
    };
    Bank.prototype.addRate = function (from, to, rate) {
        var pair = new Pair_1.default(from, to);
        this.rates[pair.toString()] = { pair: pair, rate: rate };
    };
    Bank.prototype.rate = function (from, to) {
        if (from === to)
            return 1;
        var rateObject = this.rates[Pair_1.default.createKey(from, to)];
        return rateObject ? rateObject.rate : 1;
    };
    return Bank;
}());
exports.default = Bank;
//# sourceMappingURL=Bank.js.map