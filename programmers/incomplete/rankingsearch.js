function solution(info, query) {
  // info를 배열로 변환
  const infoArr = info.map((val) => val.split(" "));
  // query를 배열로 변환
  const queryArr = query.map((val) => {
    const tmp = val.split(" and ");
    // tmp.splice(-1, 1, ...tmp[tmp.length - 1].split(" "));
    // return tmp;
    const last = tmp.pop();
    return [...tmp, ...last.split(" ")];
  });

  // 개별 항목들에 대해 조건 일치여부를 체크
  const check = (info, query, idx) => {
    if (query === "-" || info === query) return true;
    else if (idx === 4 && +info >= +query) return true;
    return false;
  };

  // queryArr의 각 query에 대해,
  // infoArr의 각 info에 대해 조건을 만족할 경우 cnt을 1씩 더해 리턴
  return queryArr.map((query, queryIdx, queryArr) => {
    let cnt = 0;
    infoArr.forEach((info, infoIdx, infoArr) => {
      if (info.every((val, idx) => check(info[idx], query[idx], idx))) cnt++;
    });

    return cnt;
  });
}

const i1 = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
const q1 = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution(i1, q1)); // [1,1,1,1,2,4]
