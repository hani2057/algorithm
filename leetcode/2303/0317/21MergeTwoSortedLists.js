/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 한쪽 노드가 없을 때는 있는 노드를 리턴
  if (!list1) return list2;
  else if (!list2) return list1;
  // list1의 값이 더 작을 때는 list1을 리턴하고
  // 리턴하는 list1에 연결된 next를 list1.next와 list2를 비교한 값으로 할당
  // 이때 할당을 먼저 하고 리턴해준다.
  else if (list1?.val <= list2?.val) {
    list1.next = mergeTwoLists(list1?.next, list2);
    return list1;
  }
  // 상동
  else {
    list2.next = mergeTwoLists(list1, list2?.next);
    return list2;
  }

  // RangeError: Maximum call stack size exceeded
  // const linkToResult = (node1, node2) => {
  //   if (!node1 && !node2) return null;

  //   if (node1?.val <= node2?.val)
  //     return new ListNode(node1?.val, linkToResult(node1?.next, node2));
  //   else return new ListNode(node2?.val, linkToResult(node1, node2?.next));
  // };

  // return linkToResult(list1, list2);
};

// var mergeTwoLists = function (l1, l2) {
//   if (!l1) return l2;
//   else if (!l2) return l1;
//   else if (l1.val <= l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   } else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2
//   }
// };
