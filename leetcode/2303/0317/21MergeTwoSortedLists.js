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
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1?.val <= list2?.val) {
    list1.next = mergeTwoLists(list1?.next, list2);
    return list1;
  } else {
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
