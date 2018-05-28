import assert from "power-assert";
import Money from "../Money";
import Expression from "../Expression";
import Bank from "../Bank";
import Sum from "../Sum";

it("test multiplication", () => {
  const five: Money = Money.dollar(5);
  assert.deepEqual(Money.dollar(10), five.times(2));
  assert.deepEqual(Money.dollar(15), five.times(3));
});

it("test Equality", () => {
  assert(Money.dollar(5).equals(Money.dollar(5)) === true);
  assert(Money.dollar(5).equals(Money.dollar(6)) === false);
  assert(Money.franc(5).equals(Money.dollar(5)) === false);
});

it("test Currency", () => {
  assert("USD", Money.dollar(1).currency());
  assert("CHF", Money.franc(1).currency());
});

it("test Simple Addition", () => {
  const five: Money = Money.dollar(5);
  const sum: Expression = five.plus(five);
  const bank: Bank = new Bank();
  const reduced: Money = bank.reduce(sum, "USD");
  assert.deepEqual(Money.dollar(10), reduced);
});

it("test Plus Returns Sum", () => {
  const five: Money = Money.dollar(5);
  const result: Expression = five.plus(five);
  const sum: Sum = result as Sum;
  assert.deepEqual(five, sum.augend);
  assert.deepEqual(five, sum.addend);
});

it("test Reduce Sum", () => {
  const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(sum, "USD");
  assert.deepEqual(Money.dollar(7), result);
});

it("test Reduce Money", () => {
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(Money.dollar(1), "USD");
  assert.deepEqual(Money.dollar(1), result);
});

it("test Reduce Money Different Currency", () => {
  const bank: Bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result: Money = bank.reduce(Money.dollar(1), "USD");
  assert.deepEqual(Money.dollar(1), result);
});

it("test identity rate", () => {
  assert(1, new Bank().rate("USD", "USD"));
});

it("test mixed addition", () => {
  const fiveBucks: Expression = Money.dollar(5);
  const tenFrancs: Expression = Money.franc(10);
  const bank: Bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
  assert.deepEqual(Money.dollar(10), result);
});

it("test sum plus money", () => {
  const fiveBucks: Expression = Money.dollar(5);
  const tenFrancs: Expression = Money.franc(10);
  const bank: Bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  const result: Money = bank.reduce(sum, "USD");
  assert.deepEqual(Money.dollar(15), result);
});

it("test sum times", () => {
  const fiveBucks: Expression = Money.dollar(5);
  const tenFrancs: Expression = Money.franc(10);
  const bank: Bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);
  const result: Money = bank.reduce(sum, "USD");
  assert.deepEqual(Money.dollar(20), result);
});
