import { MissionUtils } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';
import { ERROR_MESSAGES } from '../src/constants/Errors.js';
import BenefitCalculator from '../src/BenefitCalculator.js';
import OrderDataManager from '../src/OrderDataManager.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('BenefitCalculator 테스트', () => {
  let benefitCalculator;

  beforeEach(() => {
    const orderMenu = {
      타파스: 1,
      티본스테이크: 2,
      바비큐립: 1,
      초코케이크: 2,
      제로콜라: 1,
    };
    const date = 10;
    const orderData = new OrderDataManager(orderMenu);
    benefitCalculator = new BenefitCalculator(date, orderData);
  });

  test('크리스마스 디데이 할인 적용 날짜면 할인값 반환', () => {
    const result = benefitCalculator.calculateChristmasDiscount();
    const expected = 1900;
    expect(result).toEqual(expected);
  });

  test('입력한 날짜에 따른 평일/주말 할인 적용 할인값 반환', () => {
    const result = benefitCalculator.weekBenefitManage();
    const expected = 4046;
    expect(result).toEqual(expected);
  });

  test('특별 할인 적용 날짜면 할인값 반환', () => {
    const result = benefitCalculator.calculateSpecialDiscount();
    const expected = 1000;
    expect(result).toEqual(expected);
  });

  test('전체 할인 금액 반환', () => {
    const result = benefitCalculator.calculateTotalDiscount();
    const expected = 6946;
    expect(result).toEqual(expected);
  });

  test('전체 혜택 금액 반환', () => {
    const result = benefitCalculator.calculateTotalBenefit();
    const expected = 31946;
    expect(result).toEqual(expected);
  });

  test('전체 혜택 금액 리스트 저장', () => {
    const giftBenefit = 25000;

    const result = benefitCalculator.totalBenefitList(giftBenefit);
    const expected = {
      '크리스마스 디데이 할인': 1900,
      '평일 할인': 4046,
      '주말 할인': 0,
      '특별 할인': 1000,
      '증정 이벤트': 25000,
    };
    expect(result).toEqual(expected);
  });

  test('전체 혜택 금액에 따라 부여되는 이벤트 배지', () => {
    const result = benefitCalculator.hasEventBadge();
    const expected = '산타';
    expect(result).toEqual(expected);
  });
});
