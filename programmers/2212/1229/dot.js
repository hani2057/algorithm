// 좌표평면에서 (0~n)*k까지 정수를 가진 좌표 중 원점으로부터의 거리가 d 이하인 점의 개수를 리턴
function solution(k, d) {
  let result = 0;

  if (k === 1 && d === 1) return 3;
  else if (d === 1) return 1;

  for (let i = 1; i < d; i++) {
    if (parseInt(i / k) === i / k) {
      const max = Math.floor(Math.sqrt(d ** 2 - i ** 2));
      result += parseInt(max / k);
      // console.log("k, d, i, max, result", k, d, i, max, result);
    }
  }
  result += 2 * parseInt(d / k) + 1;

  return result;
}

console.log(solution(2, 4)); // 6
console.log(solution(1, 5)); // 26
