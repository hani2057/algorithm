function solution(want, number, discount) {
  // 구매하려는 제품과 수량을 Map으로 저장
  const mapWant = want.reduce((acc, cur, i) => {
    acc.set(cur, number[i]);
    return acc;
  }, new Map());

  // 최초 10일간 할인하는 제품과 수량을 Map으로 저장
  const mapDiscount = discount.slice(0, 10).reduce((acc, cur) => {
    acc.get(cur) ? acc.set(cur, acc.get(cur) + 1) : acc.set(cur, 1);
    return acc;
  }, new Map());

  // mapDiscount에 포함된 품목과 mapWant에 포함된 품목이 일치하는지 체크 후 boolean 값 반환
  const check = () => {
    for (const [item, quantity] of mapWant) {
      if (!mapDiscount.get(item) || mapDiscount.get(item) < quantity)
        return false;
    }
    return true;
  };

  // 결과로 반환할 count 변수
  let result = check() ? 1 : 0;

  // 하루씩 이동하면서 비교
  for (let i = 10; i < discount.length; i++) {
    // 맨 앞 제거
    mapDiscount.set(discount[i - 10], mapDiscount.get(discount[i - 10]) - 1);
    // 맨 뒤 추가
    mapDiscount.get(discount[i])
      ? mapDiscount.set(discount[i], mapDiscount.get(discount[i]) + 1)
      : mapDiscount.set(discount[i], 1);
    // 체크하여 false일 경우 continue
    if (!check()) continue;
    // 통과시 result++
    result++;
  }

  return result;
}

const want1 = ["banana", "apple", "rice", "pork", "pot"];
const number1 = [3, 2, 2, 2, 1];
const discount1 = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

const want2 = ["apple"];
const number2 = [10];
const discount2 = [
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
];

console.log(solution(want1, number1, discount1)); //3
console.log(solution(want2, number2, discount2)); //0
