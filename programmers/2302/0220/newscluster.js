function solution(str1, str2) {
  // str을 2개씩 잘라서 모두 영어이면 배열에 넣어서 리턴
  const func = (str) => {
    const result = [];
    for (let i = 0; i < str.length - 1; i++) {
      const tmp = str.substr(i, 2);
      if (tmp.match(/[a-z]{2}/)) result.push(tmp);
    }
    return result;
  };

  const arr1 = func(str1.toLowerCase());
  const arr2 = func(str2.toLowerCase());

  let union = 0;
  let intersection = 0;
  // set으로 중복 제거
  const set = new Set([...arr1, ...arr2]);
  // set의 원소에 대해 arr1과 arr2에서 중복 검사를 하여 합집합, 교집합 수에 더함
  set.forEach((val) => {
    tmp1 = arr1.filter((el) => el === val).length;
    tmp2 = arr2.filter((el) => el === val).length;
    union += Math.max(tmp1, tmp2);
    intersection += Math.min(tmp1, tmp2);
  });
  // 65536을 곱한 결과값을 리턴
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

const s1 = "FRANCE";
const s2 = "french";
const s3 = "handshake";
const s4 = "shake hands";
const s5 = "aa1+aa2";
const s6 = "AAAA12";
const s7 = "E=M*C^2";
const s8 = "e=m*c^2";

console.log(solution(s1, s2)); // 16384
console.log(solution(s3, s4)); // 65536
console.log(solution(s5, s6)); // 43690
console.log(solution(s7, s8)); // 65536
