function solution(storey) {
  const numArr = String(storey).split("");

  let res = 0;
  let carry = 0;
  for (let i = numArr.length - 1; i >= 0; i--) {
    const digit = +numArr[i] + carry;

    if (digit === 5 && i > 0) {
      if (+numArr[i - 1] >= 5) {
        res += 5;
        carry = 1;
      } else {
        res += 5;
        carry = 0;
      }
    } else if (digit <= 5) {
      res += digit;
      carry = 0;
    } else {
      res += 10 - digit;
      carry = 1;
    }
  }

  return res + carry;
}

console.log(solution(16));
console.log(solution(2554));
