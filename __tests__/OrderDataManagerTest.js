import OrderDataManager from '../src/OrderDataManager.js';

describe('OrderDataManager 테스트', () => {
  let orderDataManager;

  beforeEach(() => {
    const orderMenu = {
      타파스: 1,
      바비큐립: 1,
      초코케이크: 2,
      제로콜라: 1,
    };
    orderDataManager = new OrderDataManager(orderMenu);
  });

  test('주문한 메뉴 개수에 따른 금액 계산 테스트', () => {
    const result = orderDataManager.findPrice();
    const expected = [5500, 54000, 30000, 3000];
    expect(result).toEqual(expected);
  });

  test('주문 총금액 계산 테스트', () => {
    const result = orderDataManager.calculateTotalAmount();
    const expected = 92500;
    expect(result).toEqual(expected);
  });

  test('주문 메뉴의 카테고리 찾기 테스트', () => {
    const result = orderDataManager.findMenuCategory();
    const expected = ['appetizer', 'main', 'dessert', 'drink'];
    expect(result).toEqual(expected);
  });

  test('주문 메뉴 중 메인 메뉴 개수 확인 테스트', () => {
    const result = orderDataManager.checkMainMenu();
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test('주문 메뉴 중 디저트 메뉴 개수 확인 테스트', () => {
    const result = orderDataManager.checkDessertMenu();
    const expected = 2;
    expect(result).toEqual(expected);
  });
});
