/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const evenArr = [];
  const oddArr = [];

  for (const num of nums) {
    if (num % 2) oddArr.push(num);
    else evenArr.push(num);
  }

  return [...evenArr, ...oddArr];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
