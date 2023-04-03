// 278 First Bad Version

// Constraints:
// 1 <= bad <= n <= 231 - 1

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let s = 1;
    let e = n;

    while (e - s > 1) {
      const i = Math.floor(s + (e - s) / 2);
      if (isBadVersion(i)) {
      }
    }
    return;
  };
};
