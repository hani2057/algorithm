/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  // arr2의 숫자들을 객체의 키로 저장
  const obj = Object.fromEntries(arr2.map((num) => [num, 0]));
  const arr = [];

  // arr1을 순회하면서 obj에 있으면 value +1, 없으면 arr에 푸시
  for (const num of arr1) {
    if (typeof obj[num] === "number") obj[num]++;
    else arr.push(num);
  }
  // console.log(obj);

  // arr2의 순서대로 obj에 저장된 개수만큼 새로운 배열 생성
  const res = [];
  for (const num of arr2) {
    while (obj[num] > 0) {
      res.push(num);
      obj[num]--;
    }
  }
  return [...res, ...arr.sort((a, b) => a - b)];
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
