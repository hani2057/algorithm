const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let cur = 1;
let res = 0;

for (let i = 0; i < m; i++) {
  // 위치 조정 계수 계산
  let move = 0;
  for (let j = 0; j < i; j++) {
    if (nums[j] < nums[i]) move++;
  }
  const numMoved = nums[i] - move;

  res += Math.min(
    Math.max(numMoved, cur) - Math.min(numMoved, cur),
    Math.min(numMoved, cur) - Math.max(numMoved, cur) + n
  );
  cur = nums[i] - move === n || nums[i] - move === 1 ? 1 : nums[i] - move + 1;
  n--;
}

console.log(res);

// 1 "2" 3 4 "5" 6 7 8 "9" 10
// "2" 3 4 "5" 6 7 8 "9" 10 1
// 3 4 "5" 6 7 8 "9" 10 1
// 1 3 4 "5" 6 7 8 "9" 10
// 10 1 3 4 "5" 6 7 8 "9"
// "9" 10 1 3 4 "5" 6 7 8
// 10 1 3 4 "5" 6 7 8

// 1 "2" 3 4 "5" 6 7 8 "9" 10
// "2" 3 4 "5" 6 7 8 "9" 10 1
// 2 3 "4" 5 6 7 "8" 9 1
// 1 2 3 "4" 5 6 7 "8" 9
// 9 1 2 3 "4" 5 6 7 "8"
// "8" 9 1 2 3 "4" 5 6 7
// 8 1 2 3 "4" 5 6 7
