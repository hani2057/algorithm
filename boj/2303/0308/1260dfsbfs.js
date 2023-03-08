const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// n: 정점의 수, m: 간선의 수, v: 시작 정점
const [n, m, v] = input[0].trim().split(" ");

// graph에 연결 정보를 저장
const graph = {};
for (let i = 1; i <= m; i++) {
  const [s, e] = input[i].trim().split(" ");
  if (!graph[s]) graph[s] = [e];
  else graph[s] = [...graph[s], e];
}

// dfs는 reverse를 해야 해서(기존 배열 변경) bfs 먼저 수행
// bfs
const bfs = (s, graph) => {
  const queue = [s];
  const bfsVisited = [s];

  while (queue.length) {
    const cur = queue.shift();
    if (!graph[cur]) continue;
    for (const next of graph[cur]) {
      if (!bfsVisited.includes(next)) {
        bfsVisited.push(next);
        queue.push(next);
      }
    }
  }
  console.log(bfsVisited.join(" "));
};
// const queue = [v];
// const bfsVisited = [v];

// while (queue.length) {
//   const cur = queue.shift();
//   if (!graph[cur]) continue;
//   for (const next of graph[cur]) {
//     if (!bfsVisited.includes(next)) {
//       bfsVisited.push(next);
//       queue.push(next);
//     }
//   }
// }

// dfs
const dfs = (s, graph) => {
  const stack = [s];
  const dfsVisited = [];

  while (stack.length) {
    const cur = stack.pop();
    if (!dfsVisited.includes(cur)) dfsVisited.push(cur);

    if (!graph[cur]) continue;
    for (const next of graph[cur].reverse()) {
      stack.push(next);
    }
  }
  console.log(dfsVisited.join(" "));
};
// const stack = [v];
// const dfsVisited = [];

// while (stack.length) {
//   const cur = stack.pop();
//   if (!dfsVisited.includes(cur)) dfsVisited.push(cur);

//   if (!graph[cur]) continue;
//   for (const next of graph[cur].reverse()) {
//     stack.push(next);
//   }
// }

// console.log(dfsVisited.join(" "));
// console.log(bfsVisited.join(" "));
dfs(v, graph);
bfs(v, graph);
