// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
//   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
//   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
//   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
//   4-3. ')'를 다시 붙입니다.
//   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
//   4-5. 생성된 문자열을 반환합니다.

// 올바른 문자열인지 판별하는 함수
const check = (u) => {
  const stack = [];
  for (const paren of u) {
    if (paren === "(") stack.push(paren);
    else if (stack.length === 0) return false;
    else if (stack[stack.length - 1] !== "(") return false;
    else stack.pop();
  }
  if (stack.length) return false;
  return true;
};

function solution(w) {
  // 입력이 빈 문자열이면 빈 문자열을 반환
  if (w === "") return "";

  // w에서 균형잡힌 문자열 u,v를 분리
  let left = 0;
  let right = 0;
  let i = 0;
  while (i < w.length) {
    if (w[i] === "(") left++;
    else if (w[i] === ")") right++;

    if (left === right) break;
    i++;
  }
  const u = w.slice(0, i + 1);
  const v = w.slice(i + 1, w.length);

  // u가 올바른 문자열이면 v에 대해 다시 수행한 결과를 붙여 반환
  if (check(u)) return u + solution(v);
  // u가 올바른 문자열이 아니면 조건의 과정을 수행 후 반환
  else {
    let tmp = "";
    for (const paren of u.slice(1, u.length - 1)) {
      tmp = paren === "(" ? tmp + ")" : tmp + "(";
    }
    return "(" + solution(v) + ")" + tmp;
  }
}

const p1 = "(()())()";
const p2 = ")(";
const p3 = "()))((()";

console.log(solution(p1)); // "(()())()"
console.log(solution(p2)); // "()"
console.log(solution(p3)); // "()(())()"
