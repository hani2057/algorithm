/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // 두 문자의 길이가 다르면 return false
  if (s.length !== goal.length) return false;

  if (s.length === 1 && s !== goal) return false;

  // 길이만틈 돌리면서 비교해서 맞으면 return true
  for (let i = 0; i < s.length; i++) {
    if (s === goal) return true;

    goal = goal.slice(1) + goal[0];
  }
  // 다 돌았는데 맞는 거 없으면 return false
  return false;
};

// var rotateString = function (s, goal) {
//   // 두 문자의 길이가 다르면 return false
//   if (s.length !== goal.length) return false;

//   // goal의 첫 글자의 idx를 찾아서 순회하며 비교
//   let idx = goal.indexOf(s[0]);
//   if (idx === -1) return false;

//   for (let i = 0; i < s.length; i++) {
//     // idx가 길이를 넘어가면 가장 앞으로 돌림
//     if (idx === s.length) idx = 0;

//     // s[i]와 goal[idx]를 비교
//     if (s[i] !== goal[idx]) return false;

//     idx++;
//   }
//   return true;
// };

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
console.log(rotateString("bbbacddceeb", "ceebbbbacdd"));
