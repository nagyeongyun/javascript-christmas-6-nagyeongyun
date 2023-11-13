import { MENU_LIST } from './constants/EventData.js';

class OrderDataManager {
  #orderMenu;

  constructor(orderMenu) {
    this.#orderMenu = orderMenu;
  }

  findPrice() {
    const prices = Object.keys(this.#orderMenu).flatMap(menu => {
      const price = Object.values(MENU_LIST).flatMap(category =>
        Object.keys(category).includes(menu) ? [category[menu]] : [],
      );
      return price[0] * this.#orderMenu[menu];
    });

    return prices;
  }
}

export default OrderDataManager;
