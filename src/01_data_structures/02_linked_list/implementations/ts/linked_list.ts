type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

export class LinkedList<T> {
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
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    // If last item, return
    if (current.next === null) {
      return this;
    }

    // Item found, link current to next next item and return
    current.next = current.next.next;

    return this;
  }

  find(value: any): boolean {
    // If empty list, not found
    if (this.head === null) {
      return false;
    }

    // Iterate list
    let current = this.head;
    while (current.next !== null) {
      current = current.next;

      // If found
      if (current.value === value) {
        return true;
      }
    }

    // Not found
    return false;
  }
}
