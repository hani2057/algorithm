const fs = require("fs");
const arr = fs
  // .readFileSync("/dev/stdin")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let s = 0;
let e = arr.length - 1;

// 합의 절대값을 비교할 변수
let abs = Math.abs(arr[s] + arr[e]);
// 합을 저장할 변수
let sum = 0;
// 결과값
const result = [s, e];

while (s < e) {
  sum = arr[s] + arr[e];
  // 합의 절대값이 abs보다 작으면 abs, s, e를 재할당
  if (Math.abs(sum) < abs) {
    abs = Math.abs(sum);
    result[0] = s;
    result[1] = e;
  }

  // sum이 음수면 s를 1 증가, 양수면 e를 1 감소, 0이면 break
  if (sum < 0) s++;
  else if (sum > 0) e--;
  else if (sum === 0) break;
}

console.log(`${arr[result[0]]} ${arr[result[1]]}`);
