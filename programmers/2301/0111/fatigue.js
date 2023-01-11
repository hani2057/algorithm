function solution(k, dungeons) {
  // 결과를 담을 배열 정의
  const result = [];
  // 방문여부 처리용 배열 정의
  const visited = Array(dungeons.length);

  // 던전 탐험 수와 보유 피로도를 인풋받아 dfs 탐색하는 함수
  function dfs(cnt, k) {
    // result 배열에 던전 탐험 수를 push
    result.push(cnt);

    // dungeons를 순회하면서 k(피로도)로 탐험할 수 있으면 cnt 추가해서 dfs 돌기
    for (let i = 0; i < dungeons.length; i++) {
      const [minFatigue, useFatigue] = dungeons[i];
      if (minFatigue <= k && !visited[i]) {
        visited[i] = 1;
        dfs(cnt + 1, k - useFatigue);
        visited[i] = 0;
      }
    }
  }

  // 초기 탐험 값 0과 보유 피로도 k로 dfs 함수 호출
  dfs(0, k);

  // result에서 최대값 리턴
  // console.log(result);
  return Math.max(...result);
}

// 현재 필요 피로도
const k = 80;
// [최소 필요 피로도, 소모 피로도]
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

console.log(solution(k, dungeons)); // 3

// function solution(k, dungeons) {
//   let answer = [];
//   let visited = Array(dungeons.length).fill(false);

//   function dfs(count, k) {
//     answer.push(count);

//     for (let i = 0; i < dungeons.length; i++) {
//       let current = dungeons[i];
//       if (k >= current[0] && !visited[i]) {
//         visited[i] = 1;
//         dfs(count + 1, k - current[1]);
//         visited[i] = 0;
//       }
//     }
//   }

//   dfs(0, k);

//   return Math.max(...answer);
// }

// function solution(k, dungeons) {
//   let answer = 0;
//   const ch = Array.from({ length: dungeons.length }, (_) => 0);

//   const dfs = (fatigue, depth) => {
//     answer = Math.max(answer, depth);

//     for (const i in dungeons) {
//       const [need, consume] = dungeons[i];
//       if (!ch[i] && fatigue >= need) {
//         ch[i] = 1;
//         dfs(fatigue - consume, depth + 1);
//         ch[i] = 0;
//       }
//     }
//   };

//   dfs(k, 0);

//   return answer;
// }
