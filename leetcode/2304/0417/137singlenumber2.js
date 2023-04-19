/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {};

  for (const num of nums) {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  }

  for (const [num, cnt] of Object.entries(obj)) {
    if (cnt === 1) return +num;
  }
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
