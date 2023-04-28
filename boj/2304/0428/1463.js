const fs = require("fs");
let targetNum = parseInt(fs.readFileSync("./input.txt").toString().trim());

const visited = Array.from({ length: targetNum + 1 }).fill(Infinity);

visited[1] = 0;

for (i = 1; i <= targetNum; i++) {
  const nextCnt = visited[i] + 1;
  // const timesThree = i * 3;
  // const timesTwo = i * 2;
  // const plusOne = i + 1;

  for (const nextNum of [i * 3, i * 2, i + 1]) {
    if (visited[nextNum] > nextCnt) visited[nextNum] = nextCnt;
  }

  // if (visited[timesThree] > nextCnt) {
  //   visited[timesThree] = nextCnt;
  // }
  // if (visited[timesTwo] > nextCnt) {
  //   visited[timesTwo] = nextCnt;
  // }
  // if (visited[plusOne] > nextCnt) {
  //   visited[plusOne] = nextCnt;
  // }
}

console.log(visited[targetNum]);
