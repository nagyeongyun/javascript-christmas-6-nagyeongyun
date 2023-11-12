import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from './constants/Messages.js';

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGES.start);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
  },
};

export default OutputView;
