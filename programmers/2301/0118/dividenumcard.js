// 유클리드 호제법
// 정의: 어떤 자연수 a, b가 있을 때(a > b), 두 수의 최대공약수는 a를 b로 나눈 나머지와 b의 최대공약수와 같다.
// 1) 두 수 중에서 큰 수를 작은 수로 나눈다.
// 2) 만약 나누고 난 나머지가 0이라면 작은 수가 최대공약수이다.
// 3) 만약 나머지가 0이 아니라면, 작은 수를 다시 나머지로 나눈다.
// 4) 이를 반복해서 나머지가 0이 될 때, 그 수가 바로 두 수의 최대공약수이다.

function solution(arrayA, arrayB) {
  // 최대공약수 구하는 함수 정의
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  // arrayA에 대해서, arrayB에 대해서 똑같이 반복해야 되니까 답을 구하는 연산을 함수로 만든다.
  const test = (arrayA, arrayB) => {
    // arrayA의 최대공약수를 구한다.
    const gcdA = arrayA.reduce((acc, cur) => gcd(acc, cur));

    // arrayB에 앞서 구한 최대공약수로 나누어떨어지는 수가 있으면 0을, 없으면 최대공약수를 리턴한다.
    if (arrayB.filter((num) => num % gcdA === 0).length !== 0) return 0;
    else return gcdA;
  };

  // 두 배열의 순서를 바꿔서 test함수를 돌린 결과값 중 큰 값을 리턴한다.
  return Math.max(test(arrayA, arrayB), test(arrayB, arrayA));
}

const a1 = [10, 17];
const b1 = [5, 20];
const a2 = [10, 20];
const b2 = [5, 17];
const a3 = [14, 35, 119];
const b3 = [18, 30, 102];

console.log(solution(a1, b1)); // 0
console.log(solution(a2, b2)); // 10
console.log(solution(a3, b3)); // 7
