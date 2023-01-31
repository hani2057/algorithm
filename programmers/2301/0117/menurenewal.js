const combination = (arr, num) => {
  const result = [];

  // base case: pick할 개수가 1이면 각 원소를 배열에 담아 리턴
  if (num === 1) return arr.map((el) => [el]);

  // arr(최초 배열)에 대해서 각 원소에 대해
  // 해당원소 이후 나머지 배열에서 조합을 뽑아
  // 해당 원소에 붙여서 result에 push한다.
  arr.forEach((val, idx, arr) => {
    const restArr = arr.slice(idx + 1);
    const combinations = combination(restArr, num - 1);
    const attach = combinations.map((comb) => [val, ...comb]);

    result.push(...attach);
  });

  return result;
};

function solution(orders, course) {
  const result = [];

  // 각 코스의 필요 메뉴 수만큼
  // orders를 순회하면서 각 order에 대해 조합을 구하고
  // 조합으로 구한 결과값을 menus Map에 저장
  course.forEach((num) => {
    const menus = new Map();
    orders.forEach((order) => {
      combination(order.split(""), num).map((comb) => {
        comb = comb.sort().join("");
        menus.set(comb, menus.has(comb) ? menus.get(comb) + 1 : 1);
      });
    });

    // console.log(menus);

    // menus에 저장된 조합 중 개수의 최대값
    const maxCnt = Math.max(...menus.values());
    // 개수가 최대값과 같으면서 2 이상인 조합을 result에 push
    menus.forEach((cnt, menu) => {
      if (cnt === maxCnt && cnt >= 2) result.push(menu);
    });
  });

  return result.sort();
}

const orders1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course1 = [2, 3, 4];
const orders2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const course2 = [2, 3, 5];
const orders3 = ["XYZ", "XWY", "WXA"];
const course3 = [2, 3, 4];

console.log(solution(orders1, course1)); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(orders2, course2)); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(orders3, course3)); // ["WX", "XY"]
