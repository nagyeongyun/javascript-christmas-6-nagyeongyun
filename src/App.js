import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Controller from './Controller.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    OutputView.printStart();

    const controller = new Controller();
    await controller.start();
  }
}

export default App;
