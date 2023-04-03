const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 맞았는데 엄청 느림
// const arr = input.slice(1, input.length).map((val) => val.split(" "));
// arr.sort((a, b) => +a[0] - +b[0]);
// arr.forEach((val) => {
//   console.log(val.join(" "));
// });

// 좀 더 빠른 풀이
input.shift(); // 불필요한 첫 원소 제거
input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));
