import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/Messages.js';
import Validator from './Validator.js';
import OutputView from './OutputView.js';

const InputView = {
  async readDate() {
    try {
      const inputDate = await Console.readLineAsync(INPUT_MESSAGES.date);
      Validator.inputDate(inputDate);

      return inputDate;
    } catch (error) {
      Console.print(error.message);
      return InputView.readDate();
    }
  },

  async readOrder() {
    try {
      const inputOrder = await Console.readLineAsync(INPUT_MESSAGES.order);
      Validator.inputOrder(inputOrder);

      return inputOrder.split(',');
    } catch (error) {
      Console.print(error.message);
      return InputView.orderData();
    }
  },

  async orderData() {
    try {
      const orderData = await InputView.readOrder();
      const orderMenu = [];

      orderData.forEach(data => {
        const [name, count] = data.split('-');
        const menuName = name.trim();
        orderMenu[menuName] = Number(count);
      });
      Validator.orderData(orderMenu, orderData);
      OutputView.printMenu(orderMenu);

      return orderMenu;
    } catch (error) {
      Console.print(error.message);
      return InputView.orderData();
    }
  },
};

export default InputView;
