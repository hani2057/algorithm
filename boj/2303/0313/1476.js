// 1 ≤ E ≤ 15, 1 ≤ S ≤ 28, 1 ≤ M ≤ 19

const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
const [e, s, m] = input.map(Number);

let count = 1;
while (1) {
  if (
    (count - e) % 15 === 0 &&
    (count - s) % 28 === 0 &&
    (count - m) % 19 === 0
  ) {
    console.log(count);
    break;
  }
  count++;
}

// 메모리 초과
// let result = s;
// while (true) {
//   if (result % 15 === e && result % 19 === m) {
//     console.log(result);
//     break;
//   } else {
//     result += 28;
//   }
// }
