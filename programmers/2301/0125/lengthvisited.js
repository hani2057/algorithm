function solution(dirs) {
  const arr = dirs.split("");

  const obj = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  let now = [0, 0];
  let result = new Set();

  for (const dir of dirs) {
    let nx = now[0] + obj[dir][0];
    let ny = now[1] + obj[dir][1];

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

    // 앞에 빈 문자열을 먼저 붙여줘야 숫자 계산이 먼저 안 되고 문자열로 저장됨
    result.add("" + now[0] + nx + now[1] + ny);
    result.add("" + nx + now[0] + ny + now[1]);

    now = [nx, ny];
  }

  return result.size / 2;
}

const dirs1 = "ULURRDLLU";
const dirs2 = "LULLLLLLU";

console.log(solution(dirs1)); // 7
console.log(solution(dirs1)); // 7
