// 따라서 문제에서 1234567로 나누라는 의미는
// "자, 이 문제는 int 자료형이 버티질 못해. 그래서 1234567로 나눠서 문제를 해결해봐!"라는 말이다.
// 그 문제 해결은 모듈러 연산의 (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용한다.
// 계산 결과에 매번 1234567로 나눈 나머지를 반환하는 것으로 int 범위 내에 항상 값이 존재함을 보장할 수 있다.

function solution(n) {
  const fibonacci = (n) => {
    const arr = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
      arr[i] = (arr[i - 2] % 1234567) + (arr[i - 1] % 1234567);
    }
    return arr[n];
  };

  return fibonacci(n) % 1234567;
}

// 시간초과
// function solution(n) {
//   const fibonacci = (n) => {
//     if (n === 0) return 0;
//     else if (n === 1) return 1;
//     return (fibonacci(n - 2) % 1234567) + (fibonacci(n - 1) % 1234567);
//   };

//   return fibonacci(n) % 1234567;
// }

const n1 = 3;
const n2 = 5;

console.log(solution(n1)); // 2
console.log(solution(n2)); // 5
