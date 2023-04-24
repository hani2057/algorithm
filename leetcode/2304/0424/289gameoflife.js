/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

var gameOfLife = function (board) {
  let newBoard = board.map((arr) => [...arr]);

  const di = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dj = [-1, -1, -1, 0, 1, 1, 1, 0];

  for (let i = 0; i < newBoard[0].length; i++) {
    for (let j = 0; j < newBoard.length; j++) {
      let liveNeighborCnt = 0;

      // 둘러싼 이웃 원소 중 1의 개수를 확인
      for (let k = 0; k < 9; k++) {
        const ni = i + di[k];
        const nj = j + dj[k];

        if (
          ni >= 0 &&
          ni < newBoard[0].length &&
          nj >= 0 &&
          nj < newBoard.length &&
          newBoard[nj][ni]
        )
          liveNeighborCnt++;
      }

      if (newBoard[j][i] && liveNeighborCnt < 2) board[j][i] = 0;
      else if (newBoard[j][i] && liveNeighborCnt > 3) board[j][i] = 0;
      else if (!newBoard[j][i] && liveNeighborCnt === 3) board[j][i] = 1;
    }
  }
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
