/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 기본 규칙
// 순열, 조합, 중복순열 모두 같은 로직으로 진행된다.

// 배열에서 3개를 선택하는 경우
// 1. 하나의 수를 선택한다.
// 2. 3개를 뽑는 순열중 하나의 수를 선택했으니 남은 배열에서 2개를 선택해야한다.

// 이 두 과정을 반복하면 순열,조합,중복순열을 구할 수 있다.
// 순열, 조합, 중복순열들은 서로 남은 배열을 설정해주는 과정에서만 차이가 있다.

var permute = function (nums) {
  const permutation = (arr, leftCnt) => {
    // base case
    if (leftCnt === 1) return arr.map((v) => [v]);

    // 리턴해줄 배열. 여기에 고정값 + 나머지를 넣는다.
    let result = [];

    // 원소 하나를 고정하고 나머지 배열로 순열을 돌린 뒤 다시 합쳐서 result에 담는다
    arr.forEach((num) => {
      const restArr = arr.filter((v) => num !== v);
      const nextPermutation = permutation(restArr, leftCnt - 1);
      const combinedArr = nextPermutation.map((arr) => [num, ...arr]);
      result.push(...combinedArr);
    });

    return result;
  };

  return permutation(nums, nums.length);
};

console.log(permute([1, 2, 3]));
