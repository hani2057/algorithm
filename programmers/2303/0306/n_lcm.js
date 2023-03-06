// 유클리드 호제법
// x * y / 최대공약수 = 최소공배수

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

function solution(arr) {
  return arr.reduce((prev, cur) => (prev * cur) / gcd(prev, cur));
}

const arr1 = [2, 6, 8, 14];
const arr2 = [1, 2, 3];

console.log(solution(arr1)); // 168
console.log(solution(arr2)); // 6
