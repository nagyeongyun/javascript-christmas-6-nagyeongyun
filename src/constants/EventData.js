export const MENU_LIST = Object.freeze({
  appetizer: {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  },
  main: {
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  },
  dessert: {
    초코케이크: 15000,
    아이스크림: 5000,
  },
  drink: {
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  },
});

export const NUMBER_CONDITION = Object.freeze({
  min_discount_amount: 10000,
  gift_condition: 120000,
  gift_amount: 25000,
  christmas_days: [...Array(25)].map((_, index) => index + 1),
  christmas_discounts: [...Array(25)].map((_, index) => 1000 + index * 100),
  weekend_days: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  special_days: [3, 10, 17, 24, 25, 31],
  menu_discount: 2023,
  special_discount: 1000,
  no_discount: 0,
  star_badge_amount: 5000,
  tree_badge_amount: 10000,
  santa_badge_amount: 20000,
});
