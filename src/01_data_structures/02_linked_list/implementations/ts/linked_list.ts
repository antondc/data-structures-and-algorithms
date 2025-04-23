type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

interface ILinkedList<T> {
  prepend(value: any): this;
  append(value: any): this;
  remove(matcher: (arg: T) => boolean): this;
  find(matcher: (arg: T) => boolean): boolean;
}

export class LinkedList<T> implements ILinkedList<T> {
  head: ListNode<T> = null;

  prepend(value: any): this {
    // Create new node with value and head as next and prepend it
    this.head = {
      value,
      next: this.head,
    };

    return this;
  }

  append(value: any): this {
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

  remove(matcher: (arg: T) => boolean): this {
    // If list empty, return
    if (this.head === null) {
      return this;
    }

    // If first item, remove and return
    if (matcher(this.head.value)) {
      this.head = this.head.next;

      return this;
    }

    // Iterate list
    let current = this.head;
    while (current.next !== null) {
      if (matcher(current.next.value)) {
        // Remove the node by skipping it
        current.next = current.next.next;

        return this;
      }

      current = current.next;
    }

    return this;
  }

  find(matcher: (arg: T) => boolean): boolean {
    let current = this.head;

    while (current !== null) {
      // If found
      if (matcher(current.value)) {
        return true;
      }
      current = current.next;
    }

    // Not found
    return false;
  }
}
