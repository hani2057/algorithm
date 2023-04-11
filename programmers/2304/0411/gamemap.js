function solution(maps) {
  const n = maps[0].length - 1; // 가로 최대 인덱스
  const m = maps.length - 1; // 세로 최대 인덱스
  maps[0][0] = 0;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [y, x, res] = queue.shift();

    // 목적지에 도착하면 저장된 거리를 리턴
    if (x === n && y === m) return res;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[ny][nx]) {
        queue.push([ny, nx, res + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return -1;
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
