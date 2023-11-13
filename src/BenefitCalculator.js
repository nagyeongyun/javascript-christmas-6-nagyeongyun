import { NUMBER_CONDITION } from './constants/EventData.js';
import { Console } from '@woowacourse/mission-utils';

class BenefitCalculator {
  #date;

  constructor(date, orderData) {
    this.#date = date;
    this.orderData = orderData;
  }

  calculateChristmasDiscount() {
    let christmasDiscount = NUMBER_CONDITION.no_discount;

    if (NUMBER_CONDITION.christmas_days.includes(Number(this.#date))) {
      christmasDiscount = NUMBER_CONDITION.christmas_discounts[this.#date - 1];
    }

    return christmasDiscount;
  }

  weekBenefitManage() {
    if (!NUMBER_CONDITION.weekend_days.includes(Number(this.#date))) {
      this.calculateWeekdayDiscount();
    }
    if (NUMBER_CONDITION.weekend_days.includes(Number(this.#date))) {
      this.calculateWeekendDiscount();
    }
  }

  calculateWeekdayDiscount() {
    let dessertCount;
    let weekdayDiscount = NUMBER_CONDITION.no_discount;

    dessertCount = this.orderData.checkDessertMenu();

    if (dessertCount !== NUMBER_CONDITION.no_discount) {
      weekdayDiscount = dessertCount * NUMBER_CONDITION.menu_discount;
    }

    return weekdayDiscount;
  }

  calculateWeekendDiscount() {
    let mainCount;
    let weekendDiscount = NUMBER_CONDITION.no_discount;

    mainCount = this.orderData.checkMainMenu();

    if (mainCount !== NUMBER_CONDITION.no_discount) {
      weekendDiscount = mainCount * NUMBER_CONDITION.menu_discount;
    }

    return weekendDiscount;
  }

  calculateSpecialDiscount() {
    let specialDiscount = NUMBER_CONDITION.no_discount;

    if (NUMBER_CONDITION.special_days.includes(Number(this.#date))) {
      specialDiscount = NUMBER_CONDITION.special_discount;
    }

    return specialDiscount;
  }
}

export default BenefitCalculator;
