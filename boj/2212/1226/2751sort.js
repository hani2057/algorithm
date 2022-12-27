let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("test").toString().split("\n");

const [N, ...nums] = input.map((el) => +el);
nums.sort((a, b) => a - b);

console.log(nums.join("\n"));

// fs 대신 readline 사용
let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (x) {
    input.push(x.trim());
  })
  .on("close", function () {
    const [N, ...order] = input.map(Number);
    const result = order.sort((a, b) => a - b);
    console.log(result.join("\n"));
  });
