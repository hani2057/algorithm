const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
let input = fs.readFileSync("./input.txt").toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const alphabet of arr) {
  input = input.split(alphabet).join("a");
}

console.log(input.length);
