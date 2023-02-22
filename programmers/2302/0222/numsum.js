function solution(n) {
  let result = 0;

  // 연속된 자연수의 합으로 n을 표현하는 방법의 수는
  // n의 약수 중 홀수의 개수와 같다고 함
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) result++;
  }

  return result;
}
