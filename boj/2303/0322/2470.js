const fs = require("fs");
const arr = fs
  .readFileSync("./input.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let s = 0;
let e = arr.length - 1;

let sum = 0;
// 비교할 절대값
let abs = Math.abs(arr[s] + arr[e]);
let result = [s, e];

while (s < e) {
  // while문 시작할 때 sum 할당
  sum = arr[s] + arr[e];

  // sum의 절대값이 abs보다 작으면 abs, s, e 재할당
  if (Math.abs(sum) < abs) {
    abs = Math.abs(sum);
    result[0] = s;
    result[1] = e;
  }

  if (sum === 0) break;
  else if (sum < 0) s++;
  else if (sum > 0) e--;
  // // 합이 0이면 break
  // if (arr[s] + arr[e] === 0) break;
  // // 합이 음수면 s를 1 증가시키고
  // // 새로운 합의 절대값이 기존 절대값보다 작으면 값 대체
  // else if (arr[s] + arr[e] < 0) {
  //   s++;
  //   if (Math.abs(arr[s] + arr[e]) < abs) abs = Math.abs(arr[s] + arr[e]);
  // }
  // // 합이 양수면 e를 1 감소시키고
  // // 새로운 합의 절대값이 기존 절대값보다 작으면 값 대체
  // else {
  //   e--;
  //   if (Math.abs(arr[s] + arr[e]) < abs) abs = Math.abs(arr[s] + arr[e]);
  // }
}

console.log(`${result[s]} ${result[e]}`);
