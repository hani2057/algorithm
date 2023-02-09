function solution(s) {
  const stack = [];

  for (p of s) {
    if (p === "(") stack.push(p);
    else if (stack.length === 0) return false;
    else if (stack[stack.length - 1] !== "(") return false;
    else stack.pop();
  }

  if (stack.length !== 0) return false;
  return true;
}

const s1 = "()()";
const s2 = "(())()";
const s3 = ")()(";
const s4 = "(()(";

console.log(solution(s1)); // true
console.log(solution(s2)); // true
console.log(solution(s3)); // false
console.log(solution(s4)); // false

// for (p of s) {
//   if (p === "(") stack.push(p);
//   else if (stack.length === 0) return false;
//   else if (stack[-1] !== "(") return false;
//   else stack.pop();
// }
