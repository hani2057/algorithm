function solution(s) {
  // 주어진 s를 분리하여 arr에 담기
  const arr = [];
  for (const nums of s.replace("{{", "").replace("}}", "").split("},{")) {
    arr.push(nums.split(",").map(Number));
  }

  // arr를 짧은 것부터 정렬
  arr.sort((a, b) => a.length - b.length);

  // arr에 담긴 배열 중 result에 없는 원소만 차례로 result에 push
  const result = [];
  for (const nums of arr) {
    result.push(nums.filter((num) => !result.includes(num))[0]);
  }

  return result;
}

const s1 = "{{2},{2,1},{2,1,3},{2,1,3,4}}"; // [2, 1, 3, 4]
const s2 = "{{1,2,3},{2,1},{1,2,4,3},{2}}"; //	[2, 1, 3, 4]
const s3 = "{{20,111},{111}}"; //	[111, 20]
const s4 = "{{123}}"; //	[123]
const s5 = "{{4,2,3},{3},{2,3,4,1},{2,3}}"; //	[3, 2, 4, 1]

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
console.log(solution(s5));
