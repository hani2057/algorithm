// 11 Container With Most Water

// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let s = 0;
  let e = height.length - 1;
  let res = 0;

  while (s < e) {
    const newAmount = (e - s) * Math.min(height[s], height[e]);
    if (newAmount > res) res = newAmount;
    if (height[s] >= height[e]) e--;
    else s++;
  }

  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
