const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...arr] = input;

let cnt = 0;

for (const word of arr) {
  const result = [];
  let flag = true;

  for (let i = 0; i < word.length; i++) {
    if (!result.includes(word[i])) result.push(word[i]);
    else if (result.indexOf(word[i]) !== result.length - 1) {
      flag = false;
      break;
    }
  }

  if (flag) cnt++;
}

console.log(cnt);
