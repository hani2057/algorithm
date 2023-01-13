// carpet의 가로세로 최대값은 brown / 2
// carpet과 brown은 가로세로가 같다

function solution(brown, yellow) {
  // carpet 면적
  const carpet = brown + yellow;

  for (let carpetWidth = 3; carpetWidth <= brown / 2; carpetWidth++) {
    // carpet의 세로 = carpet의 면적 나누기 carpet의 가로
    const carpetHeight = carpet / carpetWidth;

    // 높이가 정수가 아니거나 가로가 세로보다 짧으면 컨티뉴
    if (carpetHeight % 1 !== 0 || carpetWidth < carpetHeight) continue;

    // carpet과 brown은 가로세로가 같다
    // brown은 바깥 한줄만 있다
    if (
      carpetWidth * carpetHeight - yellow === brown &&
      (carpetWidth - 2) * (carpetHeight - 2) === yellow
    )
      return [carpetWidth, carpetHeight];
  }
}

const brown1 = 10;
const yellow1 = 2;

const brown2 = 8;
const yellow2 = 1;

const brown3 = 24;
const yellow3 = 24;

console.log(solution(brown1, yellow1)); // [4, 3]
console.log(solution(brown2, yellow2)); // [3, 3]
console.log(solution(brown3, yellow3)); // [8, 6]
