function solution(fees, records) {
  // 변수 저장
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  // 차량별 주차시간 계산을 위한 obj 및 출차여부 확인을 위한 stack 정의
  const obj = {};
  const stack = [];

  for (const record of records) {
    // 변수 저장
    const [time, carNumber, status] = record.split(" ");
    // 입차 및 출차 시간을 분 단위로 변경하여 minutes 변수에 저장
    const minutes = +time.split(":")[0] * 60 + +time.split(":")[1];

    if (status === "IN") {
      // stack에 차량번호 추가
      stack.push(carNumber);
      // 입차시 해당하는 시간(분)을 -값으로 저장
      obj[carNumber]
        ? (obj[carNumber] -= minutes)
        : (obj[carNumber] = -minutes);
    } else if (status === "OUT") {
      // stack에서 차량번호 삭제
      stack.splice(stack.indexOf(carNumber), 1);
      // 출차시 해당하는 시간(분)을 +값으로 저장
      obj[carNumber] += minutes;
    }
  }

  // stack에 출차되지 않은 차가 남아있을 경우 23:59 출차 적용
  while (stack[0]) {
    const carNumber = stack.pop();
    obj[carNumber] += 23 * 60 + 59;
  }

  // 요금 계산
  const tmpFees = [];
  for (const carNumber in obj) {
    if (obj[carNumber] <= basicTime) {
      tmpFees.push([carNumber, basicFee]);
    } else {
      const fee =
        basicFee + Math.ceil((obj[carNumber] - basicTime) / unitTime) * unitFee;
      tmpFees.push([carNumber, fee]);
    }
  }

  // 차량번호 오름차순으로 정렬
  tmpFees.sort((a, b) => a[0] - b[0]);
  // 계산된 요금을 result에 담아 리턴
  const result = [];
  for (const fees of tmpFees) {
    result.push(fees[1]);
  }
  return result;
}

const fees1 = [180, 5000, 10, 600];
const records1 = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
//result1 [14600, 34400, 5000]
const fees2 = [120, 0, 60, 591];
const records2 = [
  "16:00 3961 IN",
  "16:00 0202 IN",
  "18:00 3961 OUT",
  "18:00 0202 OUT",
  "23:58 3961 IN",
];
// result2 [0, 591]
const fees3 = [1, 461, 1, 10];
const records3 = ["00:00 1234 IN"];
// result3 [14841]

console.log(solution(fees1, records1));
console.log(solution(fees2, records2));
console.log(solution(fees3, records3));
