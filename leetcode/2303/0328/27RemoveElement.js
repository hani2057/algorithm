// 27 Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

var removeElement = function (nums, val) {
  let cnt = 0;
  let i = 0;

  for (const num of nums) {
    if (num !== val) {
      cnt++;
      nums[i] = num;
      i++;
    }
  }

  return cnt;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
