/**
 * @param {string[]} strs
 * @return {string}
 */

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

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
