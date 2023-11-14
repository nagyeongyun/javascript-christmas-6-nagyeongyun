import InputView from './InputView.js';
import OutputView from './OutputView.js';
import BenefitCalculator from './BenefitCalculator.js';
import OrderDataManager from './OrderDataManager.js';
import AmountCalculator from './AmountCalculator.js';

class App {
  async run() {
    OutputView.printStart();

    const inputDate = await InputView.readDate();
    const orderMenu = await InputView.orderData();

    const orderData = new OrderDataManager(orderMenu);
    const amountCalculator = new AmountCalculator(orderData);
    const date = new BenefitCalculator(inputDate, orderData);

    if (!amountCalculator.checkMinAmount()) {
      date.hasEventBadge();
    }
  }
}

export default App;
