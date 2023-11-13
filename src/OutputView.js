import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from './constants/Messages.js';

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGES.start);
  },

  printMenu(ordermenu) {
    Console.print(OUTPUT_MESSAGES.preview);
    Console.print(OUTPUT_MESSAGES.order_menu);

    Object.entries(ordermenu).forEach(([menu, count]) => {
      Console.print(`${menu} ${count}개`);
    });
  },
};

export default OutputView;
