/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 첫번째 행의 최소값
  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  // 첫번째 열의 최소값
  for (let j = 1; j < grid.length; j++) {
    grid[j][0] += grid[j - 1][0];
  }

  // 각 포지션의 최소값
  for (let j = 1; j < grid[0].length; j++) {
    for (let i = 1; i < grid.length; i++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
