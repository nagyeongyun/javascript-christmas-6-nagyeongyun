import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/Messages.js';
import Validator from './Validator.js';
import OutputView from './OutputView.js';

const InputView = {
  async readDate() {
    const inputDate = await Console.readLineAsync(INPUT_MESSAGES.date);
    try {
      Validator.inputDate(inputDate);
    } catch (error) {
      Console.print(error.message);
      return this.readDate();
    }
    return inputDate;
  },

  async readOrder() {
    const inputOrder = await Console.readLineAsync(INPUT_MESSAGES.order);
    try {
      Validator.inputOrder(inputOrder);
    } catch (error) {
      Console.print(error.message);
      return this.orderData();
    }
    return inputOrder.split(',');
  },

  async orderData() {
    const orderData = await this.readOrder();
    const orderMenu = {};

    orderData.forEach(data => {
      const [name, count] = data.split('-');
      const menuName = name.trim();
      orderMenu[menuName] = Number(count);
    });
    try {
      Validator.orderData(orderMenu, orderData);
      OutputView.printMenu(orderMenu);
    } catch (error) {
      Console.print(error.message);
      return this.orderData();
    }
    return orderMenu;
  },
};

export default InputView;
