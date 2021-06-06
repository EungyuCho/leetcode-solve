/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0 || !head) {
    return head;
  }
  const first = head;

  let count = 0;
  while (head !== null) {
    head = head.next;
    count++;
  }

  k = count - (k % count);

  if (k === 0 || k === count) {
    return first;
  }
  head = first;
  let prev;
  while (k > 0) {
    prev = head;
    head = head.next;
    k--;
  }

  const newFirst = head;
  let newNode = newFirst;
  prev.next = null;

  if (!newNode) {
      return prev
  }
    
  while (newNode.next !== null) {
    newNode = newNode.next;
  }

  newNode.next = first;

  return newFirst;
};