const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const isVps = (parens) => {
  const arr = parens.split("");
  const stack = [];

  for (const paren of arr) {
    if (paren === "(") stack.push(paren);
    else if (!stack.length) return "NO";
    else stack.pop();
  }

  if (stack.length) return "NO";
  return "YES";
};

const result = [];

for (let i = 1; i < input.length; i++) {
  result.push(isVps(input[i]));
}

console.log(result.join("\n"));
