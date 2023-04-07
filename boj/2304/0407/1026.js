const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let arrA = input[1].split(" ");
let arrB = input[2].split(" ");

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);

console.log(arrA.reduce((prev, cur, idx) => prev + cur * arrB[idx], 0));
