function solution(s) {
  let str = s;

  const left = ["[", "{", "("];
  const right = ["]", "}", ")"];
  const check = (str) => {
    const stack = [];
    for (const char of str) {
      if (left.includes(char)) {
        stack.push(char);
        continue;
      } else {
        if (stack.length === 0) return false;
        else if (stack.pop() !== left[right.indexOf(char)]) return false;
      }
    }
    return true;
  };

  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    str = str.slice(1, str.length) + str[0];
    if (check(str)) cnt++;
  }
  return cnt;
}

const s1 = "[](){}";
const s2 = "}]()[{";
const s3 = "[)(]";
const s4 = "}}}";

console.log(solution(s1)); //3
console.log(solution(s2)); //2
console.log(solution(s3)); //0
console.log(solution(s4)); //0
