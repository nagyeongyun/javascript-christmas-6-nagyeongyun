import AmountCalculator from '../src/AmountCalculator.js';
import OrderDataManager from '../src/OrderDataManager.js';

describe('AmountCalculator 테스트', () => {
  let amountCalculator;

  beforeEach(() => {
    const orderMenu = {
      타파스: 1,
      티본스테이크: 2,
      바비큐립: 1,
      초코케이크: 2,
      제로콜라: 1,
    };
    const orderData = new OrderDataManager(orderMenu);
    amountCalculator = new AmountCalculator(orderData);
  });

  test('총주문 금액이 최소 주문 금액 이상이면 false 반환', () => {
    const result = amountCalculator.checkMinAmount();
    expect(result).toBe(false);
  });

  test('총주문 금액이 12만 원 이상이면 샴페인 1개 가격 반환', () => {
    const result = amountCalculator.hasGiftMenu();
    const expected = 25000;
    expect(result).toEqual(expected);
  });

  test('할인 후 결제 금액 반환', () => {
    const discount = 5056;
    const result = amountCalculator.discountAfterAmount(discount);

    const expected = 197444;
    expect(result).toEqual(expected);
  });
});
