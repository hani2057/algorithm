/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  if (s.split("").reverse().join("") === s) return s;

  const getPalindrome = (l, r) => {
    if (l < 0 || r >= s.length) return "";
    if (s[l] !== s[r]) return s[l];

    while (l >= 0 && r < s.length && s[l - 1] === s[r + 1]) {
      l--;
      r++;
    }
    return s.slice(l, r + 1);
  };

  let res = "";
  for (let i = 0; i < s.length - 1; i++) {
    const even = getPalindrome(i, i + 1);
    const odd = getPalindrome(i, i + 2);

    res = res.length >= even.length ? res : even;
    res = res.length >= odd.length ? res : odd;
  }

  return res;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
