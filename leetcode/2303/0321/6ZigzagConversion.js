/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Constraints:
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

var convert = function (s, numRows) {
  if (numRows === 1) return s;

  // n: 지그재그 한 세트 개수
  const n = numRows + numRows - 2;
  const arr = [];

  for (let i = 0; i < Math.ceil(s.length / n); i++) {
    // 정방향은 numRows 개수만큼 맞춰서 arr에 푸시
    const forward = s.slice(n * i, n * i + numRows).split("");
    if (forward.length < numRows) {
      forward.push(...new Array(numRows - forward.length).fill(""));
    }
    arr.push(forward);

    // 역방향은 길이를 numRows - 2로 맞춘 뒤 reverse해서 앞뒤로 빈 문자열 채워 arr에 푸시
    const backward = s.slice(n * i + numRows, n * i + n).split("");
    if (backward.length < numRows - 2) {
      backward.push(...new Array(numRows - 2 - backward.length).fill(""));
    }
    arr.push(["", ...backward.reverse(), ""]);
  }

  // 인덱스 차례대로 result에 붙임
  let result = "";
  for (let i = 0; i < numRows; i++) {
    arr.forEach((val) => {
      result = result + val[i];
    });
  }

  return result;
};

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRINGabc", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"
console.log(convert("ABCDE", 4)); // "ABCED"

// 풀이 생각
// 5일 때
// 1    9
// 2   8
// 3  7
// 4 6
// 5
// => 1 (2 8) (3 7) (4 6) 5

// 한세트 개수
// 3 => 3 + (3 - 2)
// 4 => 4 + (4 - 2)
// 5 => 5 + (5 - 2)

// 한 세트 개수 n에 대해서
// n씩 나눠 배열에 담은 다음
// 순서대로 붙이기...?

// a
// b
// c e
// d
