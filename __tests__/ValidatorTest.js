import Validator from '../src/Validator.js';
import InputView from '../src/InputView.js';
import { ERROR_MESSAGES } from '../src/constants/Errors.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();

  return logSpy;
};

describe('예외 처리 테스트', () => {
  test('날짜 예외 처리', async () => {
    const logSpy = getLogSpy();
    const INPUTS_TO_END = ['5'];
    mockQuestions(['32', ' ', '삼', '3 1', ...INPUTS_TO_END]);

    await InputView.readDate();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.date_error),
    );
  });

  test('음료만 주문했을 경우 예외 처리', async () => {
    const logSpy = getLogSpy();
    const INPUTS_TO_END = ['초코케이크-3'];
    mockQuestions(['제로콜라-1', ...INPUTS_TO_END]);

    await InputView.orderData();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.only_drink_error),
    );
  });

  test('메뉴의 개수가 20을 초과했을 경우 예외 처리', async () => {
    const logSpy = getLogSpy();
    const INPUTS_TO_END = ['초코케이크-3,제로콜라-5'];
    mockQuestions(['초코케이크-15,제로콜라-10', ...INPUTS_TO_END]);

    await InputView.orderData();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.max_order_error),
    );
  });
});
