function solution(topping) {
  const leftToppingKinds = new Set();
  const rightToppingKinds = new Set(topping);

  let result = 0;

  for (let i = 0; i < topping.length; i++) {
    // console.log("i", i, leftToppingKinds, rightToppingKinds);

    if (leftToppingKinds.size === rightToppingKinds.size) {
      result++;
      continue;
    } else if (leftToppingKinds.size > rightToppingKinds.size) break;
  }
  if (leftToppingKinds.has(topping[i])) continue;
  else {
    leftToppingKinds.add(topping[i]);
    // rightToppingKinds.delete(topping[i]);
  }
  return result;
}

// /*
//  * 또 시간초과 남ㅠ 그래도 테케 2개 통과 아까보단 줄었다
//  */
// function solution(topping) {
//   let result = 0;

//   // 롤케이크를 인덱스 순서로 잘라서
//   // 좌우 조각의 토핑 가짓수가 같다면 result++
//   for (let i = 1; i < topping.length; i++) {
//     const cakeLeft = topping.slice(0, i);
//     const cakeRight = topping.slice(i, topping.length);

//     if (new Set(cakeLeft).size === new Set(cakeRight).size) result++;
//   }

//   return result;
// }

// /*
//  * 시간초과 남
//  */
// function solution(topping) {
//   // 롤케이크 조각에 포함된 토핑의 가짓수를 리턴하는 함수
//   const getToppingKinds = (arr) => {
//     // 토핑 종류를 담을 배열
//     const toppingKinds = [];

//     // 배열에 없으면 배열에 푸시
//     arr.map((el) => {
//       if (!toppingKinds.includes(el)) toppingKinds.push(el);
//     });

//     // 토핑 가짓수를 리턴
//     return toppingKinds.length;
//   };

//   let result = 0;

//   // 롤케이크를 인덱스 순서로 잘라서
//   // 좌우 조각의 토핑 가짓수가 같다면 result++
//   for (let i = 1; i < topping.length; i++) {
//     const cakeLeft = topping.slice(0, i);
//     const cakeRight = topping.slice(i, topping.length);

//     if (getToppingKinds(cakeLeft) === getToppingKinds(cakeRight)) result++;
//   }

//   return result;
// }

const topping1 = [1, 2, 1, 3, 1, 4, 1, 2];
const topping2 = [1, 2, 3, 1, 4];

console.log(solution(topping1)); // 2
console.log(solution(topping2)); // 0
