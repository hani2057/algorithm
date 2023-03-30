/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

var searchInsert = function (nums, target) {
  let s = 0;
  let e = nums.length;

  while (s < e) {
    const i = Math.floor(s + (e - s) / 2);
    console.log("s,e,i, t, ni", s, e, i, target, nums[i]);
    if (target < nums[i]) {
      e = Math.floor(s + (e - s) / 2);
      continue;
    } else if (target > nums[i]) {
      s = i + 1;
      continue;
    } else {
      return i;
    }
  }
  return s;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([2, 3, 5, 6, 9], 7)); // 4
