// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

var plusOne = function (digits) {
  // 마지막 자리에 1을 더함
  digits[digits.length - 1]++;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 10) break;
    else if (i) {
      digits[i] -= 10;
      digits[i - 1]++;
    } else {
      digits[i] -= 10;
      digits.unshift(1);
    }
  }

  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
