import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    OutputView.printStart();
    await InputView.readDate();
    await InputView.orderData();
  }
}

export default App;
