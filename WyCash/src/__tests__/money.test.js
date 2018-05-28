"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var power_assert_1 = require("power-assert");
var Money_1 = require("../Money");
var Bank_1 = require("../Bank");
var Sum_1 = require("../Sum");
it("test multiplication", function () {
    var five = Money_1.default.dollar(5);
    power_assert_1.default.deepEqual(Money_1.default.dollar(10), five.times(2));
    power_assert_1.default.deepEqual(Money_1.default.dollar(15), five.times(3));
});
it("test Equality", function () {
    power_assert_1.default(Money_1.default.dollar(5).equals(Money_1.default.dollar(5)) === true);
    power_assert_1.default(Money_1.default.dollar(5).equals(Money_1.default.dollar(6)) === false);
    power_assert_1.default(Money_1.default.franc(5).equals(Money_1.default.dollar(5)) === false);
});
it("test Currency", function () {
    power_assert_1.default("USD", Money_1.default.dollar(1).currency());
    power_assert_1.default("CHF", Money_1.default.franc(1).currency());
});
it("test Simple Addition", function () {
    var five = Money_1.default.dollar(5);
    var sum = five.plus(five);
    var bank = new Bank_1.default();
    var reduced = bank.reduce(sum, "USD");
    power_assert_1.default.deepEqual(Money_1.default.dollar(10), reduced);
});
it("test Plus Returns Sum", function () {
    var five = Money_1.default.dollar(5);
    var result = five.plus(five);
    var sum = result;
    power_assert_1.default.deepEqual(five, sum.augend);
    power_assert_1.default.deepEqual(five, sum.addend);
});
it("test Reduce Sum", function () {
    var sum = new Sum_1.default(Money_1.default.dollar(3), Money_1.default.dollar(4));
    var bank = new Bank_1.default();
    var result = bank.reduce(sum, "USD");
    power_assert_1.default.deepEqual(Money_1.default.dollar(7), result);
});
it("test Reduce Money", function () {
    var bank = new Bank_1.default();
    var result = bank.reduce(Money_1.default.dollar(1), "USD");
    power_assert_1.default.deepEqual(Money_1.default.dollar(1), result);
});
it("test Reduce Money Different Currency", function () {
    var bank = new Bank_1.default();
    bank.addRate("CHF", "USD", 2);
    var result = bank.reduce(Money_1.default.dollar(1), "USD");
    power_assert_1.default.deepEqual(Money_1.default.dollar(1), result);
});
it("test identity rate", function () {
    power_assert_1.default(1, new Bank_1.default().rate("USD", "USD"));
});
it("test mixed addition", function () {
    var fiveBucks = Money_1.default.dollar(5);
    var tenFrancs = Money_1.default.franc(10);
    var bank = new Bank_1.default();
    bank.addRate("CHF", "USD", 2);
    var result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
    power_assert_1.default.deepEqual(Money_1.default.dollar(10), result);
});
it("test sum plus money", function () {
    var fiveBucks = Money_1.default.dollar(5);
    var tenFrancs = Money_1.default.franc(10);
    var bank = new Bank_1.default();
    bank.addRate("CHF", "USD", 2);
    var sum = new Sum_1.default(fiveBucks, tenFrancs).plus(fiveBucks);
    var result = bank.reduce(sum, "USD");
    power_assert_1.default.deepEqual(Money_1.default.dollar(15), result);
});
it("test sum times", function () {
    var fiveBucks = Money_1.default.dollar(5);
    var tenFrancs = Money_1.default.franc(10);
    var bank = new Bank_1.default();
    bank.addRate("CHF", "USD", 2);
    var sum = new Sum_1.default(fiveBucks, tenFrancs).times(2);
    var result = bank.reduce(sum, "USD");
    power_assert_1.default.deepEqual(Money_1.default.dollar(20), result);
});
//# sourceMappingURL=money.test.js.map