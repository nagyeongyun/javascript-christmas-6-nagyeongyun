import InputView from './InputView.js';
import OutputView from './OutputView.js';
import AmountCalculator from './AmountCalculator.js';
import BenefitCalculator from './BenefitCalculator.js';
import OrderDataManager from './OrderDataManager.js';

class Controller {
  async start() {
    const inputDate = await InputView.readDate();
    const orderMenu = await InputView.orderData();

    const orderData = new OrderDataManager(orderMenu);
    const amountCalculator = new AmountCalculator(orderData);

    amountCalculator.calculateTotalAmount();

    const date = new BenefitCalculator(inputDate, orderData);

    date.calculateTotalBenefit();
  }
}

export default Controller;
