const fs = require("fs");
const [a, b] = fs.readFileSync("./input.txt").toString().trim().split(" ");

const diff = b.length - a.length;
let result = a.length;

for (let i = 0; i <= diff; i++) {
  let cnt = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[i + j]) cnt++;
  }
  result = Math.min(result, cnt);
}

console.log(result);
