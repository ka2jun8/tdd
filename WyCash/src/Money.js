"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sum_1 = require("./Sum");
var Money = /** @class */ (function () {
    function Money(amount, currencyType) {
        this.amount = amount;
        this.currencyType = currencyType;
    }
    Money.prototype.currency = function () {
        return this.currencyType;
    };
    Money.prototype.times = function (multiplier) {
        return new Money(this.amount * multiplier, this.currencyType);
    };
    Money.prototype.plus = function (addend) {
        return new Sum_1.default(this, addend);
    };
    Money.prototype.reduce = function (bank, to) {
        var rate = bank.rate(this.currencyType, to);
        return new Money(this.amount / rate, to);
    };
    Money.prototype.toString = function () {
        return this.amount + " " + this.currencyType;
    };
    Money.prototype.equals = function (money) {
        return this.amount === money.amount && this.currency() === money.currency();
    };
    Money.dollar = function (amount) {
        return new Money(amount, "USD");
    };
    Money.franc = function (amount) {
        return new Money(amount, "CHF");
    };
    return Money;
}());
exports.default = Money;
//# sourceMappingURL=Money.js.map