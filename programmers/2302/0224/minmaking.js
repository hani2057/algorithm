function solution(A, B) {
  // 하나는 내림차순, 하나는 오름차순으로 정렬
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((prev, cur, idx) => {
    return prev + cur * B[idx];
  }, 0);
}

const a1 = [1, 4, 2];
const b1 = [5, 4, 4];
const a2 = [1, 2];
const b2 = [3, 4];

console.log(solution(a1, b1)); // 29
console.log(solution(a2, b2)); // 10
