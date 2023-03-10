const fs = require("fs");
const input = fs.readFileSync("./11650input.txt").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(" "));
}

let result = "";
arr
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  .forEach((val) => {
    result += `${val[0]} ${val[1]}\n`;
  });

// for ([x, y] of arr) {
//   console.log(`${x} ${y}`);
// }
console.log(result);
