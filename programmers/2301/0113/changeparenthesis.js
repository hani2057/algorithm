function solution(p) {
  // 입력이 빈 문자열이면 빈 문자열을 반환
  if (p === "") return "";

  let left = 0;
  let right = 0;

  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? left++ : right++;

    if (left === right) {
      const u = p.slice(0, i + 1);
      const v = p.slice(i + 1, p.length);
    }
  }

  var answer = "";
  return answer;
}

const p1 = "(()())()";
const p2 = ")(";
const p3 = "()))((()";

console.log(solution(p1)); // "(()())()"
console.log(solution(p2)); // "()"
console.log(solution(p3)); // "()(())()"
