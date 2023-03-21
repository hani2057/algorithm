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
    arr.push(s.slice(n * i, n + n * i));
  }

  // 지그재그 출력 순서
  const order = [0];
  let start = 1;
  let end = n - 1;
  while (start <= end) {
    order.push(start);
    order.push(end);
    start++;
    end--;
  }
  order.pop();

  console.log("arr", arr);
  console.log("order", order);
};

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"

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
