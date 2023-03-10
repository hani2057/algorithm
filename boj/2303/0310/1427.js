const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");
input.sort((a, b) => b - a);
console.log(input.join(""));
