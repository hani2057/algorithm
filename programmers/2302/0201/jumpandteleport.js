function solution(n) {
  let result = 1;
  while (n > 1) {
    if (n % 2) {
      result++;
      n = (n - 1) / 2;
      continue;
    } else {
      n = n / 2;
    }
  }

  return result;
}

// function solution(n) {
//   let result = 1;
//   const func = (n) => {
//     if (n === 1) return 1;
//     if (n % 2) {
//       result++;
//       return func((n - 1) / 2);
//     } else {
//       return func(n / 2);
//     }
//   };
//   func(n);
//   return result;
// }

const n1 = 5;
const n2 = 6;
const n3 = 5000;

console.log(solution(n1)); // 2
console.log(solution(n2)); // 2
console.log(solution(n3)); // 5
