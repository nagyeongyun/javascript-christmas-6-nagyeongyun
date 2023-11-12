import { ERROR_MESSAGES } from './constants/Errors.js';
import { MENU_LIST } from './constants/EventData.js';

class Validator {
  static inputDate(date) {
    if (Number.isNaN(Number(date))) {
      throw new Error(ERROR_MESSAGES.date_error);
    }
    if (Number(date) < 1 || Number(date) > 31) {
      throw new Error(ERROR_MESSAGES.date_error);
    }
    if (date.trim() !== date) {
      throw new Error(ERROR_MESSAGES.space_error);
    }
  }

  static inputOrder(order) {
    const inputPattern = /^[^\d\s]+-\d+(,[^\d\s]+-\d+)*$/;

    if (!inputPattern.test(order)) {
      throw new Error(ERROR_MESSAGES.order_error);
    }
    if (order.trim() === '') {
      throw new Error(ERROR_MESSAGES.order_error);
    }
  }

  static orderData(orderMenu, orderData) {
    const allMenu = Object.values(MENU_LIST).flatMap(category =>
      Object.keys(category),
    );
    const menu = Object.keys(orderMenu);
    const count = Object.values(orderMenu);

    if (count.some(count => count < 1)) {
      throw new Error(ERROR_MESSAGES.order_error);
    }
    if (!menu.every(menu => allMenu.includes(menu))) {
      throw new Error(ERROR_MESSAGES.order_error);
    }
    if (menu.length !== orderData.length) {
      throw new Error(ERROR_MESSAGES.order_error);
    }
    Validator.eventAlert(menu, count);
  }

  static eventAlert(menu, count) {
    const drink = Object.keys(MENU_LIST.drink);

    if (count.some(count => count > 20)) {
      throw new Error(ERROR_MESSAGES.max_order_error);
    }
    if (menu.length === 1 && drink.includes(menu[0])) {
      throw new Error(ERROR_MESSAGES.only_drink_error);
    }
  }

  static minAmount(amount) {
    if (amount < 10000) {
      throw new Error(ERROR_MESSAGES.min_amount_error);
    }
  }
}

export default Validator;
