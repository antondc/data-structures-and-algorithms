type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

interface ILinkedList<T> {
  prepend(value: any): LinkedList<T>;
  append(value: any): LinkedList<T>;
  remove(value: any): LinkedList<T>;
  find(value: any): boolean;
}

export class LinkedList<T> implements ILinkedList<T> {
  head: ListNode<T> = null;

  prepend(value: any): LinkedList<T> {
    // Create new node with value and head as next and prepend it
    this.head = {
      value,
      next: this.head,
    };

    return this;
  }

  append(value: any): LinkedList<T> {
    // If list is empty, create and add node
    if (this.head === null) {
      this.head = {
        value,
        next: null,
      };
      return this;
    }

    // Iterate list
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    // At the end, append new node with value
    current.next = { value, next: null };

    return this;
  }

  remove(value: any): LinkedList<T> {
    // If list empty, return
    if (this.head === null) {
      return this;
    }

    // If first item, remove and return
    if (this.head.value === value) {
      this.head = this.head.next;

      return this;
    }

    // Iterate list
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        // Remove the node by skipping it
        current.next = current.next.next;

        return this;
      }

      current = current.next;
    }

    return this;
  }

  find(value: any): boolean {
    let current = this.head;

    while (current !== null) {
      // If found
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    // Not found
    return false;
  }
}
