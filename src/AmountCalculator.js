import { Console } from '@woowacourse/mission-utils';
import { MENU_LIST } from './constants/EventData.js';
import Validator from './Validator.js';
import InputView from './InputView.js';

class AmountCalculator {
  #orderMenu;

  constructor(orderMenu) {
    this.#orderMenu = orderMenu;
  }

  findPrice() {
    const prices = Object.keys(this.#orderMenu).flatMap(menu => {
      const price = Object.values(MENU_LIST).flatMap(category =>
        Object.keys(category).includes(menu) ? [category[menu]] : [],
      );
      return price.length > 0 ? [price[0] * this.#orderMenu[menu]] : [];
    });

    return prices;
  }

  totalAmount() {
    const prices = this.findPrice();
    const totalAmount = prices.reduce((total, price) => total + price, 0);

    try {
      Validator.minAmount(totalAmount);
    } catch (error) {
      Console.print(error.message);
      return InputView.orderData();
    }

    return totalAmount;
  }
}

export default AmountCalculator;
