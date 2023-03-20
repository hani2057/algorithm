/**
 * @param {number} num
 * @return {string}
 */
// 1 <= num <= 3999

var intToRoman = function (num) {
  // 숫자와 10의 지수(자릿수)를 받아 해당하는 로마문자를 반환
  const digitToRoman = (digit, exponent, nextNum) => {
    const nextDigit = nextNum
      ? digitToRoman(nextNum % 10, exponent + 1, parseInt(nextNum / 10))
      : "";

    if (exponent === 0) {
      if (digit === 4) return nextDigit + "IV";
      else if (digit === 9) return nextDigit + "IX";
      else if (digit === 5) return nextDigit + "V";
      else if (digit < 4) return nextDigit + "I".repeat(digit);
      else return nextDigit + "V" + "I".repeat(digit - 5);
    } else if (exponent === 1) {
      if (digit === 4) return nextDigit + "XL";
      else if (digit === 9) return nextDigit + "XC";
      else if (digit === 5) return nextDigit + "L";
      else if (digit < 4) return nextDigit + "X".repeat(digit);
      else return nextDigit + "L" + "X".repeat(digit - 5);
    } else if (exponent === 2) {
      if (digit === 4) return nextDigit + "CD";
      else if (digit === 9) return nextDigit + "CM";
      else if (digit === 5) return nextDigit + "D";
      else if (digit < 4) return nextDigit + "C".repeat(digit);
      else return nextDigit + "D" + "C".repeat(digit - 5);
    } else if (exponent === 3) {
      return "M".repeat(digit);
    }
  };

  return digitToRoman(num % 10, 0, parseInt(num / 10));
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
