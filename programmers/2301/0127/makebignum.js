function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (stack.length > 0 && stack[stack.length - 1] < num && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  // 다 돌고 나서 k가 남았을 경우 뒤에서 k만큼 자르기
  stack.splice(number.length - k, k);
  return stack.join("");
}

// 작은 수 제거하는 방식 -> 실패
// function solution(number, k) {
//   const arr = number.split("").map(Number);
//   const arrHead = arr.slice(0, k);
//   const maxHead = arrHead.indexOf(Math.max(...arrHead));
//   let numToMinus = k - maxHead;

//   const newArr = arr.slice(maxHead, arr.length);

//   const idxArr = [];
//   newArr.forEach((num, idx, arr) => {
//     if (num < arr[idx + 1]) {
//       idxArr.push(idx);
//     }
//   });

//   for (let i = numToMinus, j = 0; i > 0; i--, j++) {
//     newArr.splice(idxArr[j], 1);
//   }

//   console.log("arrHead", arrHead);
//   console.log("idx", maxHead);
//   console.log("numToMinus", numToMinus);
//   console.log("newArr", newArr);
//   console.log("idxArr", idxArr);

//   var answer = "";
//   return answer;
// }

const num1 = "1924";
const k1 = 2;
const num2 = "1231234";
const k2 = 3;
const num3 = "4177252841";
const k3 = 4;

console.log(solution(num1, k1)); // "94"
console.log(solution(num2, k2)); // "3234"
console.log(solution(num3, k3)); // "775841"
