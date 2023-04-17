/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const tempArr = [];

  for (let i = nums.length; i > 0; i--) {
    const num = nums.pop();
    if (nums.indexOf(num) === -1 && !tempArr.includes(num)) return num;
    else tempArr.push(num);
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
