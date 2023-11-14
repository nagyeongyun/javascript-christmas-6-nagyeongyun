import { Console } from '@woowacourse/mission-utils';
import { NUMBER_CONDITION } from './constants/EventData.js';
import Validator from './Validator.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class AmountCalculator {
  #totalAmount;

  constructor(orderData) {
    this.orderData = orderData;
    this.#totalAmount = this.orderData.calculateTotalAmount();
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

    return expectedPayment;
  }
}

export default AmountCalculator;
