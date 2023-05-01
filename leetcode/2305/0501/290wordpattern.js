/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // 패턴에 대해 해시로 단어를 등록하고 순회하면서 모두 매치하면 true
  const obj = {};
  const patternArr = pattern.split("");
  const strArr = s.split(" ");

  if (patternArr.length !== strArr.length) return false;

  // 중복처리
  if (new Set(patternArr).size !== new Set(strArr).size) return false;

  let res = true;

  for (let i = 0; i < patternArr.length; i++) {
    const p = patternArr[i];
    // 해시에 없으면 패턴과 단어를 저장
    if (!obj[p]) {
      obj[p] = strArr[i];
    }
    // 해시에 있으면 단어의 일치 여부를 검사
    else if (obj[p] !== strArr[i]) {
      res = false;
      break;
    }
  }

  return res;
};

console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog dog dog dog")); // false
