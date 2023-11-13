import InputView from './InputView.js';
import AmountCalculator from './AmountCalculator.js';
import BenefitCalculator from './BenefitCalculator.js';

class Controller {
  async orderData() {
    const orderMenu = await InputView.orderData();
    const amount = new AmountCalculator(orderMenu);
    amount.calculateTotalAmount();
  }

  async visitDate() {
    const inputDate = await InputView.readDate();
    const date = new BenefitCalculator(inputDate);
    date.calculateChristmasDiscount();
  }
}

export default Controller;
