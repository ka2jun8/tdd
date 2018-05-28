import Money from "./Money";
import Expression from "./Expression";
import Bank from "./Bank";

export default class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}
  public times(multiplier: number) {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }
  public plus(addend: Expression) {
    return new Sum(this, addend);
  }
  public reduce(bank: Bank, to: string): Money {
    const amount: number =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;

    return new Money(amount, to);
  }
}
