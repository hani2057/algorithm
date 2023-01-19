/*
 * Map을 쓰면 시간을 줄일 수 있다고 해서 Map 써서 풀어봄
 */
function solution(topping) {
  // 전체 토핑 정보를 저장할 맵을 만들고,
  // 잘라낸 왼쪽 롤케이크의 토핑 종류를 저장할 셋을 만들어줌
  const allToppings = new Map();
  const leftToppingKinds = new Set();

  // 배열을 순회하면서 맵에 토핑 정보를 넣어줌
  topping.forEach((val) => {
    allToppings.set(val, (allToppings.get(val) || 0) + 1);
  });

  // 결과값 저장할 변수
  let result = 0;

  // 배열을 순회하면서
  for (let i = 0; i < topping.length; i++) {
    // 맵에서 토핑을 하나씩 제거
    allToppings.set(topping[i], allToppings.get(topping[i]) - 1);

    // 왼쪽 롤케이크에 없는 종류의 토핑이면 셋에 추가
    if (!leftToppingKinds.has(topping[i])) leftToppingKinds.add(topping[i]);

    // 제거하고 나서 토핑 수가 0이 되면 해당 종류 토핑을 맵에서 삭제
    if (allToppings.get(topping[i]) === 0) allToppings.delete(topping[i]);

    // 왼쪽 오른쪽 토핑의 가짓수가 같으면 result++
    if (allToppings.size === leftToppingKinds.size) result++;

    // 왼쪽 롤케이크의 토핑 가짓수가 오른쪽보다 많아지면 break
    if (allToppings.size < leftToppingKinds.size) break;
  }

  return result;
}

const topping1 = [1, 2, 1, 3, 1, 4, 1, 2];
const topping2 = [1, 2, 3, 1, 4];

console.log(solution(topping1)); // 2
console.log(solution(topping2)); // 0
