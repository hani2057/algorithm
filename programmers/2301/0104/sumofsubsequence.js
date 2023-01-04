function solution(elements) {
  // result로 반환할 배열 정의
  const result = [...elements];

  // 기존 배열 길이 저장
  const len = elements.length;

  // 길이-1 까지 추가해서 연장
  elements = [...elements, ...elements];
  elements.pop();

  // 2개 ~ 길이개 합 구하여 result에 push
  for (let i = 2; i <= len; i++) {
    for (let j = 0; j < elements.length - i; j++) {
      const tmpArr = elements.slice(j, j + i);
      result.push(tmpArr.reduce((acc, cur) => acc + cur));
    }
  }

  // 중복 제거
  const newResult = [...new Set(result)];

  return newResult.length;
}

const elements = [7, 9, 1, 1, 4];
console.log(solution(elements)); // 18
