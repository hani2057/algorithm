const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const input = "9999".split("");

const arr = new Array(10).fill(0);
input.forEach((val, idx) => {
  if (val === "6" || val === "9") arr[9]++;
  else arr[val]++;
});

arr[9] = Math.ceil(arr[9] / 2);

console.log(Math.max(...arr));
