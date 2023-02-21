function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}

const s1 = "baabaa";
const s2 = "cdcd";

console.log(solution(s1)); // 1
console.log(solution(s2)); // 0
