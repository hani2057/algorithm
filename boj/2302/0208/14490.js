const [num1, num2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(":")
  .map(Number);

const getGcd = (num1, num2) => {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }
  return num1;
};

const gcd = getGcd(num1, num2);
console.log(`${num1 / gcd}:${num2 / gcd}`);

// let [num1, num2] = input.split(':').map(n=> parseInt(n));
// let getGCD = (num1, num2) => {
//     while(num2 > 0){
//         let r = num1 % num2;
//         num1 = num2;
//         num2 = r;
//     }
//     return num1;
// }
// let gcd = getGCD(num1,num2);
// console.log(`${num1/gcd}:${num2/gcd}`)
