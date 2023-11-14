import InputView from './InputView.js';
import OutputView from './OutputView.js';
import AmountCalculator from './AmountCalculator.js';
import BenefitCalculator from './BenefitCalculator.js';
import OrderDataManager from './OrderDataManager.js';

class App {
  async run() {
    OutputView.printStart();

    const inputDate = await InputView.readDate();
    const orderMenu = await InputView.orderData();

    const orderData = new OrderDataManager(orderMenu);
    const date = new BenefitCalculator(inputDate, orderData);

    date.calculateTotalBenefit();
    //date.calculateTotalDiscount();
  }
}

export default App;
