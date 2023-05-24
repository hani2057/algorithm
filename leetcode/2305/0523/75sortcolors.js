/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    // nums[i]가 2이면 맨 오른쪽으로 옮기고 right를 -1
    if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
    }
    // nums[i]가 0이면 맨 왼쪽으로 옮기고 left, i를 +1
    else if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
      i++;
    }
    // nums[i]가 1이면 그대로 i만 +1(다음 인덱스로 넘어감)
    else if (nums[i] === 1) {
      i++;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
