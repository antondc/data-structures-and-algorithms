import { LinkedList } from "../../../02_linked_list/implementations/ts/linked_list";

interface IHashTable<T> {
  set(key: string, value: T): HashTable<T>;
  get(key: string): T;
  remove(key: string): HashTable<T>;
}

export class HashTable<T> implements IHashTable<T> {
  private buckets: Array<LinkedList<[string, T]>>;
  private size;

  constructor(size = 127) {
    this.buckets = new Array(size);
    this.size = size;
  }

  private hash(key: string): number {
    const stringifiedKey = String(key);
    let hash = 0;

    for (let i = 0; i < stringifiedKey.length; i++) {
      hash = hash + stringifiedKey.charCodeAt(i);
    }

    return hash % this.size;
  }

  private searchLinkedListValueByKey(
    key: string,
    bucket: LinkedList<[string, T]>
  ): T | null {
    let current = bucket.head;

    while (current !== null) {
      // If found
      if (current.value[0] === key) {
        return current.value[1];
      }
      current = current.next;
    }

    // Not found
    return null;
  }

  private removeLinkedListItemByKey(
    key: string,
    bucket: LinkedList<[string, T]>
  ): undefined {
    // If list empty, return
    if (bucket.head === null) {
      return;
    }

    // If first item, remove and return
    if (bucket.head.value[0] === key) {
      bucket.head = bucket.head.next;

      return;
    }

    // Iterate list
    let current = bucket.head;
    while (current.next !== null) {
      if (current.next.value[0] === key) {
        // Remove the node by skipping it
        current.next = current.next.next;

        return;
      }

      current = current.next;
    }

    return;
  }

  set(key: string, value: T): HashTable<T> {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    this.buckets[index].append([key, value]);

    return this;
  }

  get(key: string): T | null {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return null;

    const item = this.searchLinkedListValueByKey(key, bucket);

    return item;
  }

  remove(key: string): HashTable<T> {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return this;

    this.removeLinkedListItemByKey(key, bucket);

    return this;
  }
}
