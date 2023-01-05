// 시간초과 남
// function solution(queue1, queue2) {
//   // 각 큐의 합을 변수에 저장
//   let sum1 = queue1.reduce((acc, cur) => acc + cur);
//   let sum2 = queue2.reduce((acc, cur) => acc + cur);

//   // 총합이 홀수면 -1을 리턴
//   if ((sum1 + sum2) % 2) return -1;

//   // 결과로 리턴할 카운트 변수
//   let result = 0;

//   // 각 큐의 합을 비교해서 합이 더 작은 큐에서 다른 쪽으로 원소 이동 <- 반복
//   while (queue1.length && queue2.length) {
//     if (sum1 === sum2) return result;
//     else if (sum1 > sum2) {
//       const numToMove = queue1.shift();
//       sum1 -= numToMove;
//       sum2 += numToMove;
//       queue2.push(numToMove);
//       result++;
//     } else {
//       const numToMove = queue2.shift();
//       sum1 += numToMove;
//       sum2 -= numToMove;
//       queue1.push(numToMove);
//       result++;
//     }
//   }

//   return -1;
// }

function solution(queue1, queue2) {
  // 각 큐의 합을 변수에 저장
  let sum1 = queue1.reduce((acc, cur) => acc + cur);
  const sum2 = queue2.reduce((acc, cur) => acc + cur);

  // 총합이 홀수면 -1을 리턴
  if ((sum1 + sum2) % 2) return -1;

  // 투포인터 사용하기 위해 합친 배열과 포인터를 변수에 저장
  const arr = [...queue1, ...queue2];
  let start = 0;
  let end = queue1.length;
  let midsum = (sum1 + sum2) / 2;

  // 결과로 리턴할 카운트 변수
  let count = 0;

  // 두 바퀴 돌기 전까지 sum1(queue1의 합)과 midsum(target value)를 비교하여 포인터 이동
  while (count <= arr.length * 2 && start !== end) {
    if (sum1 === midsum) return count;
    else if (sum1 < midsum) {
      sum1 += arr[end];
      end === arr.length - 1 ? (end = 0) : end++;
      count++;
    } else if (sum1 > midsum) {
      sum1 -= arr[start];
      start === arr.length - 1 ? (start = 0) : start++;
      count++;
    }
  }
  return -1;
}

const q1 = [3, 2, 7, 2];
const q2 = [4, 6, 5, 1];

const q3 = [1, 2, 1, 2];
const q4 = [1, 10, 1, 2];

const q5 = [1, 1];
const q6 = [1, 5];

console.log(solution(q1, q2)); // 2
console.log(solution(q3, q4)); // 7
console.log(solution(q5, q6)); // -1

// 다른 사람 풀이 - 투포인터
// const solution = (queue1, queue2) => {
//   let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
//   let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
//   const half = (sum1 + sum2) / 2;
//   const q = [...queue1, ...queue2];
//   let q1Pointer = 0;
//   let q2Pointer = queue1.length;

//   for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
//     if (sum1 === half) {
//       return cnt;
//     }
//     sum1 =
//       sum1 > half
//         ? sum1 - q[q1Pointer++ % q.length]
//         : sum1 + q[q2Pointer++ % q.length];
//   }

//   return -1;
// };
