function solution(word) {
  const arr = [];

  [...Array(5).keys()].reduce((prev, cur, idx) => {
    const tmp = prev + 5 ** idx;
    arr.unshift(tmp);
    return tmp;
  }, 0);

  // console.log(arr);

  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  return word.split("").reduce((prev, cur, idx) => {
    return prev + obj[cur] * arr[idx] + 1;
  }, 0);
}

const word1 = "AAAAE";
const word2 = "AAAE";
const word3 = "I";
const word4 = "EIO";

console.log(solution(word1)); // 6
console.log(solution(word2)); // 10
console.log(solution(word3)); // 1563
console.log(solution(word4)); //1189

// a
// aa
// aaa
// aaaa
// aaaaa
// aaaae
// aaaai
// aaaao
// aaaau
// aaae
// aaaea

// 길이 1이면
console.log(1562 / 2);
console.log();
