import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/Messages.js';
import Validator from './Validator.js';

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
};

export default InputView;
