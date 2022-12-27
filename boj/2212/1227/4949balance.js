// const input = [];

// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", function (line) {
//     input.push(line.trim());
//   })
//   .on("close", function () {
//     console.log(input);
//     process.exit();
//   });

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("test")
  .toString()
  .trim()
  .split("\n");
input.pop();

const solution = (sentences) => {
  const brackets = "()[]";
  const result = sentences.map((sentence) => {
    const stack = [];

    for (const char of sentence) {
      if (!brackets.includes(char)) continue;

      if (char === "(" || char === "[") {
        stack.push(char);
      } else if (char === ")") {
        if (!stack.length || stack[stack.length - 1] !== "(") return "no";
        stack.pop();
      } else if (char === "]") {
        if (!stack.length || stack[stack.length - 1] !== "[") return "no";
        stack.pop();
      }
    }
    if (stack.length) return "no";
    return "yes";
  });
  return result.join("\n");
};

console.log(solution(input));
