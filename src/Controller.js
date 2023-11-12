import InputView from './InputView.js';
import AmountCalculator from './AmountCalculator.js';

class Controller {
  async orderData() {
    const orderMenu = await InputView.orderData();
    const amount = new AmountCalculator(orderMenu);
    amount.totalAmount();
  }
}

export default Controller;
