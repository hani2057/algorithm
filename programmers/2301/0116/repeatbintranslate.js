// 배열 메서드를 이용하고, 길이 차이로 풀어봄
function solution(s) {
  let binTranslationCnt = 0;
  let zeroCnt = 0;

  const binTranslation = (s) => {
    binTranslationCnt++;
    const len = s.length;

    s = s
      .split("")
      .filter((num) => num === "1")
      .join("");

    const newLen = s.length;
    zeroCnt += len - newLen;

    if (newLen === 1) return;
    else return binTranslation(newLen.toString(2));
  };

  binTranslation(s);

  return [binTranslationCnt, zeroCnt];
}

// RangeError: Maximum call stack size exceeded
// function solution(s) {
//   let binTranslationCnt = 0;
//   let zeroCnt = 0;

//   const binTranslation = (s) => {
//     binTranslationCnt++;

//     let oneCnt = 0;

//     for (const num of s) {
//       num === "0" ? zeroCnt++ : oneCnt++;
//     }

//     const newS = oneCnt.toString(2);

//     if (newS === 1) return;
//     else return binTranslation(newS);
//   };

//   binTranslation(s);

//   return [binTranslationCnt, zeroCnt];
// }

const s1 = "110010101001";
const s2 = "01110";
const s3 = "1111111";

console.log(solution(s1)); // [3, 8]
console.log(solution(s2)); // [3, 3]
console.log(solution(s3)); // [4, 1]
