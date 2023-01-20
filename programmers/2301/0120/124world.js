function solution(n) {
  const arr = [4, 1, 2];
  let result = "";

  while (n) {
    result = arr[n % 3] + result;
    // 나머지가 0일 때는 몫에서 1 빼서 자릿수 맞춰 줌
    n = n % 3 === 0 ? n / 3 - 1 : parseInt(n / 3);
  }

  return result;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));

// 1;
// 2;
// 4 - 3(3 * 1);
// 11;
// 12;
// 14;
// 21;
// 22;
// 24;
// 41;
// 42;
// 44 - 12(3 * 4);
// 111;
// 112;
// 114;
// 121;
// 122;
// 124;
// 141;
// 142;
// 144 - 21(3 * 7);
// 211;

// 3 * (3n + 1);
// 9n + 3;
