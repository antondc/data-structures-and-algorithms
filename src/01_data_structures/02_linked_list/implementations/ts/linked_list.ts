// Singly linked list implemented as plain functions

type ListNode<T> = { value: T; next: ListNode<T> | null };
type LinkedList<T> = {
  head: ListNode<T> | null;
  append: (value) => LinkedList<T>;
  prepend: (value) => LinkedList<T>;
  remove: (value) => LinkedList<T>;
  find: (value) => boolean;
};

export class LinkedListImpl<T> implements LinkedList<T> {
  head = null;

  constructor(value: T) {
    this.head = {
      value,
      next: null,
    };
  }

  append(value: any): LinkedList<T> {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = { value, next: null };

    return this;
  }

  prepend(value: any): LinkedList<T> {
    this.head = {
      value,
      next: this.head,
    };

    return this;
  }

  remove(value: any): LinkedList<T> {
    if (this.head.value === value) {
      this.head = this.head.next;

      return this;
    }

    let current = this.head;

    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;

      return this.head;
    }

    return this;
  }

  find(value: any): boolean {
    let current = this.head;

    while (current.next !== null) {
      current = current.next;

      if (current.value === value) {
        return true;
      }
    }

    return false;
  }
}
