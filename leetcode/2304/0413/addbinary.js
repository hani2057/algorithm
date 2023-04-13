/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  const short = a.length <= b.length ? a : b;
  const long = short === a ? b : a;

  let result = "";
  let extra = 0;

  // 배열로 바꿔서 순서 변경
  let arrShort = short.split("").reverse().map(Number);
  const arrLong = long.split("").reverse().map(Number);

  const extraZeros = Array.from({
    length: arrLong.length - arrShort.length,
  }).fill(0);

  arrShort = [...arrShort, ...extraZeros];

  for (let i = 0; i < arrLong.length; i++) {
    const sum = arrShort[i] + arrLong[i] + extra;
    if (sum >= 2) {
      result = sum - 2 + result;
      extra = 1;
    } else {
      result = sum + result;
      extra = 0;
    }
  }

  if (extra) result = extra + result;
  return result;
};

// var addBinary = function (a, b) {
//   // 더한 뒤 배열로 변환
//   let sum = String(+a + +b).split("");
//   // 인덱스 처리 위해 앞에 자릿수 하나 넣어줌
//   sum.unshift("0");
//   // 숫자로 바꿔서 순회하며 올림처리
//   sum = sum.map(Number);
//   console.log(sum);
//   for (let i = sum.length - 1; i > 0; i--) {
//     if (sum[i] >= 2) {
//       sum[i] -= 2;
//       sum[i - 1] += 1;
//     }
//   }
//   if (sum[0] === 0) sum.shift();
//   return sum.join("");
// };

console.log(addBinary("11", "1"));
console.log(addBinary("11", "11"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "0"));
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);
