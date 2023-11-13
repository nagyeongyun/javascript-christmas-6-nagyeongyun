import { NUMBER_CONDITION } from './constants/EventData.js';
import { Console } from '@woowacourse/mission-utils';

class BenefitCalculator {
  #date;

  constructor(date) {
    this.#date = date;
  }

  calculateChristmasDiscount() {
    let christmasDiscount = NUMBER_CONDITION.no_discount;

    if (NUMBER_CONDITION.christmas_days.includes(Number(this.#date))) {
      christmasDiscount = NUMBER_CONDITION.christmas_discounts[this.#date - 1];
    }

    return christmasDiscount;
  }
}

export default BenefitCalculator;
