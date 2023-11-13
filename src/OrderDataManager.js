import { Console } from '@woowacourse/mission-utils';
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

  findMenuCategory() {
    const menuCategories = Object.keys(this.#orderMenu).flatMap(menu => {
      const categoryName = Object.keys(MENU_LIST).find(category =>
        Object.keys(MENU_LIST[category]).includes(menu),
      );

      return categoryName;
    });

    return menuCategories;
  }

  checkMainMenu() {
    const orderCategories = this.findMenuCategory();
    const menuCategories = Object.keys(MENU_LIST);
    const orderCount = Object.values(this.#orderMenu);

    const mainIndex = orderCategories.reduce((acc, category, index) => {
      return category === menuCategories[1] ? [...acc, index] : acc;
    }, []);

    const mainCount = mainIndex.reduce(
      (sum, index) => sum + orderCount[index],
      0,
    );

    return mainCount;
  }

  checkDessertMenu() {
    const orderCategories = this.findMenuCategory();
    const menuCategories = Object.keys(MENU_LIST);
    const orderCount = Object.values(this.#orderMenu);

    const dessertIndex = orderCategories.reduce((acc, category, index) => {
      return category === menuCategories[2] ? [...acc, index] : acc;
    }, []);

    const dessertCount = dessertIndex.reduce(
      (sum, index) => sum + orderCount[index],
      0,
    );

    return dessertCount;
  }
}

export default OrderDataManager;
