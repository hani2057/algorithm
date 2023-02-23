function solution(record) {
  const users = new Map();
  const result = [];

  // record를 순회하면서 id와 nickname을 Map에 저장
  for (const val of record) {
    const [status, id, nickname] = val.split(" ");

    if (status === "Enter") {
      users.set(id, nickname);
    } else if (status === "Change") {
      users.set(id, nickname);
    }
  }

  // record를 한 번 더 순회하면서 출입여부 결과를 result에 푸시
  for (const val of record) {
    const [status, id] = val.split(" ");

    if (status === "Enter") {
      result.push(`${users.get(id)}님이 들어왔습니다.`);
    } else if (status === "Leave") {
      result.push(`${users.get(id)}님이 나갔습니다.`);
    }
  }

  return result;
}

const record1 = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(record1));
//	["Prodo님이 들어왔습니다.",
// "Ryan님이 들어왔습니다.",
// "Prodo님이 나갔습니다.",
// "Prodo님이 들어왔습니다."]
