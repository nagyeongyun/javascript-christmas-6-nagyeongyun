import { Console } from '@woowacourse/mission-utils';
import { NUMBER_CONDITION } from './constants/EventData.js';
import Validator from './Validator.js';
import InputView from './InputView.js';

class AmountCalculator {
  #totalAmount;

  constructor(orderData) {
    this.orderData = orderData;
    this.#totalAmount = this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    const prices = this.orderData.findPrice();
    this.#totalAmount = prices.reduce((total, price) => total + price, 0);

    try {
      Validator.minAmount(this.#totalAmount);
    } catch (error) {
      Console.print(error.message);
      return InputView.orderData();
    }

    return this.#totalAmount;
  }

  hasGiftMenu() {
    if (this.#totalAmount >= NUMBER_CONDITION.gift_condition) {
      return NUMBER_CONDITION.gift_amount;
    }

    return NUMBER_CONDITION.no_discount;
  }

  discountAfterAmount(discount) {
    const totalDiscount = discount;
    const expectedPayment = this.#totalAmount - totalDiscount;

    return expectedPayment;
  }
}

export default AmountCalculator;
