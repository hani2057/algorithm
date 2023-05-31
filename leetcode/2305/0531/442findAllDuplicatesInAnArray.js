/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const map = new Map();
  const res = [];

  for (const num of nums) {
    if (map.get(num)) res.push(num);
    else map.set(num, 1);
  }

  return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));
