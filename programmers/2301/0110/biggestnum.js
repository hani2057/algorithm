function solution(numbers) {
  // 주어진 배열의 원소를 문자열로 변환한 후
  // 합쳐서 비교한 뒤 내림차순으로 정렬함
  const nums = numbers.map(String).sort((a, b) => {
    const tmp1 = a + b;
    const tmp2 = b + a;
    return tmp2 - tmp1;
  });

  // 배열의 원소가 모두 0일 때는 0을 반환, 아니면 합쳐서 문자열로 반환
  return nums[0] === "0" ? "0" : nums.join("");
}

const nums1 = [6, 10, 2];
const nums2 = [3, 30, 34, 5, 9];

console.log(solution(nums1)); // "6210"
console.log(solution(nums2)); // "9534330"
