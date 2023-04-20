/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const obj = {};

  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  const arr = [];
  for (const [num, cnt] of Object.entries(obj)) {
    if (cnt === 1) arr.push(+num);
  }
  return arr;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
console.log(singleNumber([0, 1]));
