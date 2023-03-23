/**
 * @param {number} n
 * @return {number}
 */

// Constraints:
// 1 <= n <= 104

var minOperations = function (n) {
  const arr = Array.from({ length: n }, (_, i) => 2 * i + 1);
  let result = 0;
  for (let i = 0; i <= (n - 1) / 2; i++) {
    result += n - arr[i];
  }
  return result;
};

console.log(minOperations(3)); // 2
console.log(minOperations(4)); //
console.log(minOperations(6)); // 9
