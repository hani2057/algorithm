/**
 * @param {string[]} strs
 * @return {string}
 */

const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((word) => strs[0][i] === word[i])) {
      result += strs[0][i];
    } else {
      break;
    }
  }
  return result;
};

console.log(longestCommonPrefix(strs));
