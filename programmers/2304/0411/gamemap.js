function solution(maps) {
  const n = maps[0].length;
  const m = maps.length;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = [[0, 0, 0]];
  const queue = [[0, 0, 0]];

  while (queue) {
    const [x, y, res] = queue.shift();
    if (x === n && y === m) return res;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (maps[x][y] && )
    }
  }

  var answer = 0;
  return answer;
}

const maps1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps1));
console.log(solution(maps2));
