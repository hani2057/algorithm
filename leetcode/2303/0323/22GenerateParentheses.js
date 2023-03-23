/**
 * @param {number} n
 * @return {string[]}
 */

// Constraints:
// 1 <= n <= 8

var generateParenthesis = function (n) {};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]

// 풀이법 생각
// 일단 완전탐색인데, 규칙을 어떻게 주면 될까?
// 여는 괄호가 1개일 때
// 여는 괄호가 2개일 때
// 여는 괄호가 n개일 때

// 남은 여는 괄호 개수가 0개일 때 -> 닫는 괄호 (base case)
// 남은 여는 괄호 개수가 1개일 때
//     -> 닫고, 열고, 여는 괄호 개수 -1
//     -> 또는 열고, 여는 괄호 개수 -1
// 앞부터 채워가기
