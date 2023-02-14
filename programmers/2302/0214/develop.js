function solution(progresses, speeds) {
  const result = [];
  const arr = progresses.map((p, idx) => Math.ceil((100 - p) / speeds[idx]));

  let cnt = 1;
  arr.reduce((prev, cur) => {
    if (prev >= cur) {
      cnt++;
      return prev;
    } else {
      result.push(cnt);
      cnt = 1;
      return cur;
    }
  });
  result.push(cnt);

  return result;
}

const p1 = [93, 30, 55];
const s1 = [1, 30, 5];
const p2 = [95, 90, 99, 99, 80, 99];
const s2 = [1, 1, 1, 1, 1, 1];
console.log(solution(p1, s1)); // [2, 1]
console.log(solution(p2, s2)); // [1, 3, 2]
