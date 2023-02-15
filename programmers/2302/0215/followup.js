function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    // 중복이 있거나 끝말잇기 규칙에 어긋난 경우
    if (
      i > words.indexOf(words[i]) ||
      words[i][0] !== words[i - 1][words[i - 1].length - 1]
    )
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
  }

  return [0, 0];
}

const n1 = 3;
const w1 = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

const n2 = 5;
const w2 = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];

const n3 = 2;
const w3 = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log(solution(n1, w1)); // [3,3]
console.log(solution(n2, w2)); // [0,0]
console.log(solution(n3, w3)); // [1,3]
