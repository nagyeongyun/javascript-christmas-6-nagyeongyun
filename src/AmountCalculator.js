import { Console } from '@woowacourse/mission-utils';
import { NUMBER_CONDITION } from './constants/EventData.js';
import Validator from './Validator.js';
import InputView from './InputView.js';

class AmountCalculator {
  #totalAmount;

  constructor(orderData) {
    this.orderData = orderData;
    this.#totalAmount = 0;
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
    this.#totalAmount = this.calculateTotalAmount();

    return this.#totalAmount >= NUMBER_CONDITION.gift_amount;
  }
}

export default AmountCalculator;
