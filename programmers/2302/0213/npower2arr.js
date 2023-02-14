function solution(n, left, right) {
  const arr = [];

  // (x, y)에 들어갈 숫자는 max(x, y) + 1 이다.
  for (let i = left; i <= right; i++) {
    arr.push(Math.max(Math.floor(i / n), i % n) + 1);
  }

  return arr;
}

const n1 = 3;
const l1 = 2;
const r1 = 5;
const n2 = 4;
const l2 = 7;
const r2 = 14;

console.log(solution(n1, l1, r1)); // [3,2,2,3]
console.log(solution(n2, l2, r2)); // [4,3,3,3,4,4,4,4]
