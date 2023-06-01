/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  s = s
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
  t = t
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

  return s === t ? true : false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
