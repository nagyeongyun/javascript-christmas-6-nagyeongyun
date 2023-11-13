import { NUMBER_CONDITION } from './constants/EventData.js';
import { OUTPUT_MESSAGES } from './constants/Messages.js';
import AmountCalculator from './AmountCalculator.js';
import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView';

class BenefitCalculator {
  #date;

  constructor(date, orderData) {
    this.#date = date;
    this.orderData = orderData;
    this.amount = new AmountCalculator(orderData);
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
      return this.calculateWeekdayDiscount();
    }
    if (NUMBER_CONDITION.weekend_days.includes(Number(this.#date))) {
      return this.calculateWeekendDiscount();
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

  calculateTotalDiscount() {
    const christmasBenefit = this.calculateChristmasDiscount();
    const weekBenefit = this.weekBenefitManage();
    const specialBenefit = this.calculateSpecialDiscount();

    const totalDiscount = christmasBenefit + weekBenefit + specialBenefit;
    this.amount.discountAfterAmount(totalDiscount);

    return totalDiscount;
  }

  calculateTotalBenefit() {
    const totalDiscount = this.calculateTotalDiscount();
    const giftBenefit = this.amount.hasGiftMenu();

    const totalBenefit = totalDiscount + giftBenefit;

    return totalBenefit;
  }

  hasEventBadge() {
    const totalBenefit = this.calculateTotalBenefit();
    let eventBadge = OUTPUT_MESSAGES.no_result;

    if (totalBenefit >= NUMBER_CONDITION.star_badge_amount) {
      eventBadge = OUTPUT_MESSAGES.star_badge;
    }
    if (totalBenefit >= NUMBER_CONDITION.tree_badge_amount) {
      eventBadge = OUTPUT_MESSAGES.tree_badge;
    }
    if (totalBenefit >= NUMBER_CONDITION.santa_badge_amount) {
      eventBadge = OUTPUT_MESSAGES.santa_badge;
    }

    return eventBadge;
  }
}

export default BenefitCalculator;
