import { Console } from '@woowacourse/mission-utils';
import { NUMBER_CONDITION } from './constants/EventData.js';
import { ERROR_MESSAGES } from './constants/Errors.js';
import OutputView from './OutputView.js';

class AmountCalculator {
  #totalAmount;

  constructor(orderData) {
    this.orderData = orderData;
    this.#totalAmount = this.orderData.calculateTotalAmount();
  }

  checkMinAmount() {
    if (this.#totalAmount < NUMBER_CONDITION.min_discount_amount) {
      Console.print(ERROR_MESSAGES.min_amount_error);
      OutputView.printNoDiscount(this.#totalAmount);

      return true;
    }

    return false;
  }

  hasGiftMenu() {
    let giftMenu = NUMBER_CONDITION.no_discount;
    OutputView.printTotalAmount(this.#totalAmount);

    if (this.#totalAmount >= NUMBER_CONDITION.gift_condition) {
      giftMenu = NUMBER_CONDITION.gift_amount;
    }
    OutputView.printGiftMenu(giftMenu);

    return giftMenu;
  }

  discountAfterAmount(discount) {
    const totalDiscount = discount;
    const expectedPayment = this.#totalAmount - totalDiscount;

    OutputView.printExpectedPayment(expectedPayment);

    return expectedPayment;
  }
}

export default AmountCalculator;
