export const INPUT_MESSAGES = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  order:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  preview: '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n',
  order_menu: '<주문 메뉴>',
  total_order_amount: '\n<할인 전 총주문 금액>',
  gift_menu: '\n<증정 메뉴>',
  benefit_list: '\n<혜택 내역>',
  total_benefit_amount: '\n<총혜택 금액>',
  discount_after_amount: '\n<할인 후 예상 결제 금액>',
  event_badge: '\n<12월 이벤트 배지>',

  minus: '-',
  gift: '샴페인 1개',
  no_result: '없음',
  star_badge: '별',
  tree_badge: '트리',
  santa_badge: '산타',
});

export const BENEFIT_LIST = {
  '크리스마스 디데이 할인': 0,
  '평일 할인': 0,
  '주말 할인': 0,
  '특별 할인': 0,
  '증정 이벤트': 0,
};
