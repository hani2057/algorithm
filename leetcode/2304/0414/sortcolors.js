/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const obj = {
    0: 0,
    1: 0,
    2: 0,
  };

  for (const num of nums) {
    obj[num]++;
  }

  let i = 0;
  for (let [color, cnt] of Object.entries(obj)) {
    while (cnt > 0) {
      nums[i] = +color;
      cnt--;
      i++;
    }
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
