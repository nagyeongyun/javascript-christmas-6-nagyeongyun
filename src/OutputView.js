import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from './constants/Messages.js';
import { NUMBER_CONDITION } from './constants/EventData.js';

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

  printTotalAmount(amount) {
    const totalAmount = amount.toLocaleString();

    Console.print(OUTPUT_MESSAGES.total_order_amount);
    Console.print(`${totalAmount}원`);
  },

  printGiftMenu(gift) {
    Console.print(OUTPUT_MESSAGES.gift_menu);

    if (gift == NUMBER_CONDITION.no_discount) {
      return Console.print(OUTPUT_MESSAGES.no_result);
    }

    return Console.print(OUTPUT_MESSAGES.gift);
  },
};

export default OutputView;
