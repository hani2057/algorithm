/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const resNums = [];

  let num = n;
  while (num !== 1) {
    const arr = num.toString().split("").map(Number);
    let nextNum = 0;
    arr.forEach((val) => {
      nextNum += val ** 2;
    });
    num = nextNum;

    if (resNums.includes(num)) return false;
    resNums.push(num);
  }

  return true;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(78));
