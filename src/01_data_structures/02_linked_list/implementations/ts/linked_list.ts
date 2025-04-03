// Singly linked list implemented as plain functions

type ListNode<T> = { value: T; next: ListNode<T> | null };

export const createLinkedList = <T>(value: T): ListNode<T> => ({
  value,
  next: null,
});

export const append = <T>(head: ListNode<T>, value: T): ListNode<T> => {
  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = { value, next: null };

  return head;
};

export const prepend = <T>(head: ListNode<T>, value: T): ListNode<T> => ({
  value,
  next: head,
});

export const remove = <T>(head: ListNode<T>, value: T): ListNode<T> => {
  if (head.value === value) {
    return head.next;
  }

  let current = head;

  while (current.next !== null && current.next.value !== value) {
    current = current.next;
  }

  if (current.next !== null) {
    current.next = current.next.next;

    return head;
  }

  return head;
};

export const find = <T>(head: ListNode<T>, value: T): boolean => {
  let current = head;

  while (current.next !== null) {
    current = current.next;

    if (current.value === value) {
      return true;
    }
  }

  return false;
};
