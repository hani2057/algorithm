/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let s = i + 1;
    let e = nums.length - 1;
    while (s < e) {
      const sum = nums[i] + nums[s] + nums[e];

      if (sum < 0) s++;
      else if (sum > 0) e--;
      else {
        res.push([nums[i], nums[s], nums[e]]);

        while (s < e && nums[s] === nums[s + 1]) s++;
        while (s < e && nums[e] === nums[e - 1]) e--;

        s++;
        e--;
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
