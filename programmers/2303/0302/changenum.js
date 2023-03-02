// y부터 시작해서 작아지도록 함
function solution(x, y, n) {
  // y부터 시작해서 연산값과 연산횟수를 저장하여 bfs 돌리기 위한 배열 정의
  const queue = [[y, 0]];
  // 방문처리 위한 object 정의
  const visited = {};

  while (queue.length) {
    const [cur, cnt] = queue.shift();

    if (cur < x) continue;
    else if (cur === x) return cnt;
    else {
      if (cur % 3 === 0 && !visited[cur / 3]) {
        visited[cur / 3] = 1;
        queue.push([cur / 3, cnt + 1]);
      }
      if (cur % 2 === 0 && !visited[cur / 2]) {
        visited[cur / 2] = 1;
        queue.push([cur / 2, cnt + 1]);
      }
      if (!visited[cur - n]) {
        visited[cur - n] = 1;
        queue.push([cur - n, cnt + 1]);
      }
    }
  }
  return -1;
}

// 얘도 시간초과...ㅠㅠㅠ
// function solution(x, y, n) {
//   if (x === y) return 0;

//   // bfs 돌리기 위한 queue 배열
//   const queue = [x];
//   // 연산 횟수를 저장할 배열
//   const cntArr = new Array(y).fill(0);

//   while (queue.length) {
//     const cur = queue.shift();
//     for (const next of [cur * 3, cur * 2, cur + n]) {
//       // cur에 연산한 결과가 y랑 같으면 (지금까지 연산횟수 + 1)을 리턴
//       if (next === y) return cntArr[cur] + 1;
//       // 연산결과가 아직 y보다 작으면 queue에 푸시하고 연산횟수를 저장한다.
//       else if (next < y) {
//         queue.push(next);
//         // 지금 + 1이 다음보다 크면 아무것도 안 해야 함
//         if (cntArr[next] === 0 || cntArr[cur] < cntArr[next])
//           cntArr[next] = cntArr[cur] + 1;
//       }
//     }
//   }
//   return -1;
// }

// 이것도 시간초과
// function solution(x, y, n) {
//   // 연산 횟수를 담을 배열
//   const result = [];

//   // bfs
//   const visited = [];
//   visited.push([x, 0]);

//   while (visited.length) {
//     const curNode = visited.shift();

//     for (const nextNode of [curNode[0] * 3, curNode[0] * 2, curNode[0] + n]) {
//       if (nextNode === y) {
//         result.push(curNode[1] + 1);
//       } else if (nextNode < y) {
//         visited.push([nextNode, curNode[1] + 1]);
//       }
//     }
//   }

//   return result.length === 0 ? -1 : Math.min(...result);
// }

// 시간초과 남
// function solution(x, y, n) {
//   // 연산 횟수를 담을 배열
//   const result = [];

//   // bfs
//   const visited = [];
//   visited.push([x, 0]);

//   while (visited.length) {
//     const curNode = visited.shift();

//     const plusN = curNode[0] + n;
//     const timesTwo = curNode[0] * 2;
//     const timesThree = curNode[0] * 3;

//     if (plusN === y) {
//       result.push(curNode[1] + 1);
//     } else if (plusN < y) {
//       visited.push([plusN, curNode[1] + 1]);
//     }
//     if (timesTwo === y) {
//       result.push(curNode[1] + 1);
//     } else if (timesTwo < y) {
//       visited.push([timesTwo, curNode[1] + 1]);
//     }
//     if (timesThree === y) {
//       result.push(curNode[1] + 1);
//     } else if (timesThree < y) {
//       visited.push([timesThree, curNode[1] + 1]);
//     }
//   }

//   return result.length === 0 ? -1 : Math.min(...result);
// }

const x1 = 10;
const y1 = 40;
const n1 = 5;
const x2 = 10;
const y2 = 40;
const n2 = 30;
const x3 = 2;
const y3 = 5;
const n3 = 4;

console.log(solution(x1, y1, n1)); // 2
console.log(solution(x2, y2, n2)); // 1
console.log(solution(x3, y3, n3)); // -1

// function solution(x, y, n) {
//   const queue = [x];
//   const visited = new Array(y - x + 1).fill(0);
//   let idx = 0;
//   let length = 1;

//   while (idx < length) {
//     const current = queue[idx];
//     const count = visited[current - x];
//     idx += 1;

//     if (current === y) return count;

//     let nextNumber = 0;

//     for (const nextNumber of [current * 3, current * 2, current + n]) {

//       if (visited[nextNumber - x] !== 0) continue;

//       if (nextNumber > y) continue;

//       queue.push(nextNumber);
//       visited[nextNumber - x] = count + 1;
//       length += 1
//     };
//   };

//   return -1;
// };
