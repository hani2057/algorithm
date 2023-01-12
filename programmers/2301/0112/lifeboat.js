function solution(people, limit) {
  // 결과로 리턴할 구명보트 개수 변수 설정
  let boatNeeded = 0;

  // 내림차순으로 정렬
  people.sort((a, b) => b - a);

  // 가장 큰 값과 가장 작은 값을 더해 limit 이하이면 두 명을 구출,
  // 아니면 가장 무거운 한 명을 구출
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    boatNeeded++;
  }

  // 리팩토링 전
  // for (let i = 0, j = people.length - 1; i <= j; ) {
  //   people[i] + people[j] <= limit ? (i++, j--) : i++;
  //   boatNeeded++;
  // }

  return boatNeeded;
}

// while로 돌리면서 shift랑 pop 했더니 시간초과 남

// function solution(people, limit) {
//   let boatNeeded = 0;

//   people.sort((a, b) => b - a);

//   while (people.length > 0) {
//     if (people[0] + people[people.length - 1] <= limit) {
//       people.shift();
//       people.pop();
//     } else {
//       people.shift();
//     }
//     boatNeeded++;
//   }

//   return boatNeeded;
// }

const people1 = [70, 50, 80, 50];
const limit1 = 100;
const people2 = [70, 80, 50];
const limit2 = 100;

console.log(solution(people1, limit1)); // 3
console.log(solution(people2, limit2)); // 3
