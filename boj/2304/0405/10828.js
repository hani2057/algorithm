const fs = require("fs");
const arr = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const stack = [];
const result = [];

for (const input of arr) {
  const command = input.split(" ")[0];
  if (command === "push") stack.push(input.split(" ")[1]);
  else if (command === "pop") result.push(stack.length ? stack.pop() : -1);
  else if (command === "size") result.push(stack.length);
  else if (command === "empty") result.push(stack.length ? 0 : 1);
  else if (command === "top")
    result.push(stack.length ? stack[stack.length - 1] : -1);
}

console.log(result.join("\n"));
