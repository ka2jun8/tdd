"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Money_1 = require("./Money");
var Sum = /** @class */ (function () {
    function Sum(augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }
    Sum.prototype.times = function (multiplier) {
        return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
    };
    Sum.prototype.plus = function (addend) {
        return new Sum(this, addend);
    };
    Sum.prototype.reduce = function (bank, to) {
        var amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
        return new Money_1.default(amount, to);
    };
    return Sum;
}());
exports.default = Sum;
//# sourceMappingURL=Sum.js.map