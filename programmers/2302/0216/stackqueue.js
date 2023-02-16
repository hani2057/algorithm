function solution(priorities, location) {
  let result = 1;
  while (true) {
    // 중요도가 더 높은 문서가 남아있으면 맨 뒤로 이동
    if (priorities[0] < Math.max(...priorities)) {
      priorities.push(priorities.shift());
      location = location === 0 ? priorities.length - 1 : location - 1;
    }
    // 중요도가 더 높은 문서가 없을 때 타겟이 가장 앞에 있으면 리턴
    else if (location === 0) return result;
    // 중요도가 더 높은 문서가 없는데 가장 앞의 문서가 타겟이 아니면 그 문서를 빼고 인덱스 반영
    else {
      priorities.shift();
      result++;
      location--;
    }
  }
}

const p1 = [2, 1, 3, 2];
const l1 = 2;

const p2 = [1, 1, 9, 1, 1, 1];
const l2 = 0;

console.log(solution(p1, l1)); // 1
console.log(solution(p2, l2)); // 5
