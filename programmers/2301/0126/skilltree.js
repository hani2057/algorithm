function solution(skill, skill_trees) {
  // 스킬 순서를 배열에 저장
  const skillOrder = skill.split("");
  // 결과값 카운트 변수
  let cnt = 0;

  for (const skill_tree of skill_trees) {
    // 스킬 트리의 스킬 순서를 배열에 저장
    const skillTree = skill_tree.split("");
    // 스킬 순서에 해당하는 스킬의 인덱스를 담을 배열
    const idxArr = [];

    // 스킬 순서에 해당하는 스킬이면 해당 순서를 idxArr에 푸시
    skillTree.map((skill) => {
      if (skillOrder.includes(skill)) idxArr.push(skillOrder.indexOf(skill));
    });

    let isValid = true;

    // idxArr에 저장된 순서가 0부터 1씩 증가하는 올바른 순서일 경우 cnt++
    idxArr.map((val, idx) => {
      if (val !== idx) isValid = false;
    });

    if (isValid) cnt++;
  }

  return cnt;
}

const skill = "CBD";
const skilltrees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skilltrees)); // 2
