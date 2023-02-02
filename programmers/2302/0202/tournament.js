function solution(n, a, b) {
  let result = 0;

  // 순서 정렬
  // if (a > b) {
  //   [a, b] = [b, a];
  // }

  while (a !== b) {
    result++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }

  return result;
}

console.log(solution(8, 4, 7)); // 3
