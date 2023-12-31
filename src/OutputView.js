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

  printBenefitList(list) {
    Console.print(OUTPUT_MESSAGES.benefit_list);

    const hasBenefit = Object.values(list).every(
      value => value === NUMBER_CONDITION.no_discount,
    );

    if (hasBenefit) {
      return Console.print(OUTPUT_MESSAGES.no_result);
    }

    Object.entries(list).forEach(([key, value]) => {
      if (value !== NUMBER_CONDITION.no_discount) {
        const formattedValue = value.toLocaleString();
        Console.print(`${key}: -${formattedValue}원`);
      }
    });
  },

  printTotalBenefitAmount(amount) {
    Console.print(OUTPUT_MESSAGES.total_benefit_amount);

    const totalBenefitAmount = amount.toLocaleString();
    Console.print(`-${totalBenefitAmount}원`);
  },

  printExpectedPayment(amount) {
    Console.print(OUTPUT_MESSAGES.discount_after_amount);

    const expectedPayment = amount.toLocaleString();
    Console.print(`${expectedPayment}원`);
  },

  printEventBadge(result) {
    Console.print(OUTPUT_MESSAGES.event_badge);

    if (result == NUMBER_CONDITION.no_discount) {
      return Console.print(OUTPUT_MESSAGES.no_result);
    }

    return Console.print(result);
  },

  printNoDiscount(amount) {
    const totalAmount = amount.toLocaleString();

    Console.print(OUTPUT_MESSAGES.total_order_amount);
    Console.print(`${totalAmount}원`);
    Console.print(OUTPUT_MESSAGES.gift_menu);
    Console.print(OUTPUT_MESSAGES.no_result);
    Console.print(OUTPUT_MESSAGES.benefit_list);
    Console.print(OUTPUT_MESSAGES.no_result);
    Console.print(OUTPUT_MESSAGES.total_benefit_amount);
    Console.print(`${NUMBER_CONDITION.no_discount}원`);
    Console.print(OUTPUT_MESSAGES.discount_after_amount);
    Console.print(`${totalAmount}원`);
    Console.print(OUTPUT_MESSAGES.event_badge);
    Console.print(OUTPUT_MESSAGES.no_result);
  },
};

export default OutputView;
