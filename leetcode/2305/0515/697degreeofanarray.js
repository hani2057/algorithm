/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // obj에 nums의 원소의 개수를 저장
  const obj = {};
  for (const num of nums) {
    if (!obj[num]) obj[num] = 1;
    else obj[num]++;
  }

  // 가장 많은 개수로 degree 결정
  // 개수가 같을 경우 degrees 결정
  const degree = Math.max(...Object.entries(obj).map((val) => val[1]));
  const degrees = Object.entries(obj).filter(([_, cnt]) => cnt === degree);

  const lengths = [];
  // degree에 해당하는 원소의 가장 첫 번째 등장 인덱스와 가장 마지막 등장 인덱스 구하기
  // 인덱스의 차(길이)가 가장 짧은 것 리턴
  for (const [num, _] of degrees) {
    lengths.push(nums.lastIndexOf(+num) - nums.indexOf(+num) + 1);
  }
  return Math.min(...lengths);
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
