// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */

// Constraints:
// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

var removeDuplicates = function (nums) {
  // 숫자를 비교해가면서 다른 숫자가 나올 때마다 cnt 증가, 비교할 compare 재할당,
  // nums의 i번째에 새로운 숫자 할당, i++
  let compare = nums[0];
  let cnt = 1;
  let i = 1;
  for (const num of nums) {
    if (num !== compare) {
      cnt++;
      compare = num;
      nums[i] = num;
      i++;
    }
  }
  return cnt;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
