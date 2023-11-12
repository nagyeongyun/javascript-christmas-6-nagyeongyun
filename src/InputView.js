import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/Messages.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.day);
  },
};

export default InputView;
