export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let i = 0;
  let j = 0;
  let node = head;
  let current = head;

  // Get length.
  while (current.next) {
    current = current.next;

    i++;
  }

  const length = i + 1; // Add +1 to account for last node.next = null.
  const target = length - n - 1; // Target from left. -1 as we need base 0.

  // If length is equal to element to remove from end.
  // it is the first element, remove it.
  if (n === length) {
    head = head.next;
  }

  // Traverse from left, up to item
  while (j <= target) {
    // On target
    if (j === target) {
      node.next = node.next?.next;

      break;
    }

    // Otherwise, continue
    node = node.next;
    j++;
  }

  return head;
}
