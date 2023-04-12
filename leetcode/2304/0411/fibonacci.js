// 509. Fibonacci Number

// Constraints:
// 0 <= n <= 30

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // base case
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  // memo
  const memo = Array.from({ length: n + 1 }).fill(0);
  memo[1] = 1;
  memo[2] = 1;

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
};
