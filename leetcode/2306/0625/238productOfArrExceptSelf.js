/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = Array(nums.length);
  const right = Array(nums.length);

  let mLeft = 1;
  let mRight = 1;
  for (let i = 0; i < nums.length; i++) {
    mLeft = mLeft * nums[i];
    left[i] = mLeft;

    mRight = mRight * nums[nums.length - 1 - i];
    right[nums.length - 1 - i] = mRight;
  }

  nums[0] = right[1] === -0 ? 0 : right[1];
  nums[nums.length - 1] =
    left[nums.length - 2] === -0 ? 0 : left[nums.length - 2];
  for (let i = 1; i < nums.length - 1; i++) {
    nums[i] =
      left[i - 1] * right[i + 1] === -0 ? 0 : left[i - 1] * right[i + 1];
  }
  return nums;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
