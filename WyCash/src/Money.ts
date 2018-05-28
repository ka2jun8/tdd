import Expression from "./Expression";
import Sum from "./Sum";
import Bank from "./Bank";

export default class Money implements Expression {
  constructor(public amount: number, protected currencyType: string) {}

  currency() {
    return this.currencyType;
  }
  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currencyType);
  }
  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }
  reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this.currencyType, to);
    return new Money(this.amount / rate, to);
  }

  toString(): string {
    return this.amount + " " + this.currencyType;
  }

  equals(money: Money): boolean {
    return this.amount === money.amount && this.currency() === money.currency();
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
