const fs = require("fs");
const nums = fs.readFileSync("/dev/stdin").toString().trim().split("");

let zeros = 0;
let ones = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === "0") {
    if (nums[i + 1] === "1" || nums[i + 1] === undefined) zeros++;
  }

  if (nums[i] === "1") {
    if (nums[i + 1] === "0" || nums[i + 1] === undefined) ones++;
  }
}

console.log(Math.min(zeros, ones));
