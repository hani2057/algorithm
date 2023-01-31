function solution(numbers, target) {
  let result = 0;

  const dfs = (idx, sum) => {
    // idx가 numbers 배열의 길이보다 작을 때
    // 다음 인덱스 값을 +, - 하면서 dfs를 돈다
    if (idx < numbers.length) {
      dfs(idx + 1, sum + numbers[idx]);
      dfs(idx + 1, sum - numbers[idx]);
    }
    // idx가 numbers 배열과 같을 때
    // sum이 target값과 같으면 result++
    else {
      if (sum === target) result++;
      return;
    }
  };

  dfs(0, 0);

  return result;
}

const num1 = [1, 1, 1, 1, 1];
const t1 = 3;
const num2 = [4, 1, 2, 1];
const t2 = 4;

console.log(solution(num1, t1)); // 5
console.log(solution(num2, t2)); // 2
