function solution(citations) {
  citations.sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i + 1 <= citations[i]) result++;
  }

  return result;
}

// 함수로 반복 돌면 시간 때문에 테케 통과 못함ㅠ
function solution(citations) {
  // 내림차순으로 정렬
  citations.sort((a, b) => b - a);

  let result;
  // 해당 원소까지 자른 배열(해당 원소 이상의 값)의 길이가 원소와 같으면 result에 할당
  // 중간에 break 걸어주기 위해서 some 사용
  citations.some((val, idx, arr) => {
    if (arr.slice(0, idx + 1).length >= val) {
      result = val;
      return true;
    }
  });

  return result;
}

console.log(solution([3, 0, 6, 1, 5])); //3
console.log(solution([102, 2, 2, 2, 101])); // 2
console.log(solution([0, 0, 0, 0, 0])); // 0
