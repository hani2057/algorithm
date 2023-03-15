/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const addDigit = (node1, node2, carryValue) => {
    // node가 없거나 올려받은 수가 없으면 return
    if (!node1 && !node2 && !carryValue) return;

    // 각 노드의 값과 올려받은 수를 더한다
    const newVal = (node1?.val || 0) + (node2?.val || 0) + carryValue;
    // 더한 값이 10 이상이면 1을 올려준다
    const newCarryValue = newVal >= 10 ? 1 : 0;
    // 다음 노드 정의
    const newNext = addDigit(node1?.next, node2?.next, newCarryValue);

    // newVal의 1의 자리 수를 val로, newNext를 next로 가지는 NodeList를 리턴
    return new NodeList(newVal % 10, newNext);
  };

  // l1과 l2를 더해서 리턴
  return addDigit(l1, l2, 0);
};
