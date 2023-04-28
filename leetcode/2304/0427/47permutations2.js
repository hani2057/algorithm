/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const permutation = (arr, leftCnt) => {
    if (leftCnt === 0) return arr.map((v) => [v]);

    const res = [];
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) continue;

      const restArr = [...arr].splice(i, 1);
      console.log("arr", arr);
      const nextPermuation = permutation(restArr, leftCnt - 1);
      const combinedArr = nextPermuation.map((combined) => [
        arr[i],
        ...combined,
      ]);
      res.push(...combinedArr);
    }
    return res;
  };

  return permutation(nums, nums.length);
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 2]));
