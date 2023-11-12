import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Controller from './Controller.js';

class App {
  async run() {
    OutputView.printStart();
    await InputView.readDate();

    const controller = new Controller();
    await controller.orderData();
  }
}

export default App;
