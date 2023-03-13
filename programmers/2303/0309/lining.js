function solution(n, k) {
  const result = [];
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  // 총 경우의 수 (=== n!)
  let totalCnt = arr.reduce((prev, cur) => prev * cur);

  // arr가 빌 때까지
  while (arr.length) {
    console.log("arr", arr);
    console.log("tcnt", totalCnt);
    console.log("k", k);
    // 경우의 수를 arr의 길이로 나누어주고
    totalCnt = totalCnt / arr.length;
    // k - 1 (인덱스 처리) 을 줄어든 다음 경우의 수로 나눈 몫에 해당하는 숫자를
    // arr에서 제거하여 result에 푸시하고
    result.push(...arr.splice(parseInt((k - 1) / totalCnt), 1));
    // k도 줄어든 다음 경우의 수로 나눈 나머지로 바꾸어서 다음 재귀를 돌린다.
    k = k % totalCnt;
    console.log("res", result);
  }
  return result;
}

// function solution(n, k) {
//   const answer = [];
//   const people = Array.from({ length: n }, (_, i) => i + 1);
//   let caseNum = people.reduce((ac, v) => ac * v, 1)

//   while (answer.length < n) {
//       caseNum = caseNum / people.length;
//       answer.push(...people.splice(Math.floor((k - 1) / caseNum), 1));
//       k = k % caseNum;
//   }

//   return answer;
// }

// function solution(n, k) {
//   if (n === 1) return [1];

//   const permutation = (num, arr) => {
//     const result = [];

//     if (num === 1) return arr.map((el) => [el]);

//     arr.forEach((val, idx, arr) => {
//       const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
//       permutation(num - 1, rest).forEach((newArr) => {
//         result.push([val, ...newArr]);
//       });
//     });
//     return result;
//   };

//   // 연산횟수 줄이기 위해 k를 n으로 나눈 나머지로
//   // 목표 배열의 가장 첫번째 수를 제외한 배열로 순열을 돌린다.
//   const num = (k % n) + 1;
//   const arr = new Array(n - 1).fill().map((_, idx) => {
//     if (idx + 1 < num) return idx + 1;
//     else return idx + 2;
//   });

//   // 구한 순열들 중 목표에 해당하는 배열에 앞서 구한 첫 숫자를 붙여 리턴
//   return [num, ...permutation(n - 1, arr)[parseInt(k / n) - 1]];
// }

console.log(solution(4, 5)); // [3,1,2]
