function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((size) => {
    !obj[size] ? (obj[size] = 1) : obj[size]++;
  });
  // console.log(obj);

  const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  // console.log("arr", arr);

  let result = 0;
  let sumNeeded = false;
  for (const [key, value] of arr) {
    if (k - value > 0) {
      k -= value;
      result++;
    } else if (k - value <= 0) {
      result++;
      break;
    }
  }
  return result;
  // const obj2 = Object.fromEntries(
  //     Object.entries(obj).sort(([,a],[,b]) => a > b ? -1 : 1 )
  // );
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
