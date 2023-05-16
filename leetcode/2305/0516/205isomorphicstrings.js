/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Constraints:
// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function (s, t) {
  const mapS = new Map();
  const mapT = new Map();

  // s와 t의 길이만큼 순회하면서
  for (let i = 0; i < s.length; i++) {
    // map을 만들어서 s의 인덱스에 해당하는 글자가 처음 나오면
    if (!mapS.get(s[i])) {
      // t[i]가 이미 사용된 글자일 때 return fasle
      if (mapT.get(t[i])) return false;
      // s와 t의 글자를 각각 매핑
      else {
        mapS.set(s[i], t[i]);
        mapT.set(t[i], s[i]);
      }
    }
    // 이미 매핑된 글자가 있는데 다르면 return false
    else if (mapS.get(s[i]) !== t[i]) return false;
  }
  // 끝까지 문제 없으면 return true
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
