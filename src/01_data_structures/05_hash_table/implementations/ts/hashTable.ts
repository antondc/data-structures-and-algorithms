import { HashTableLinkedList } from "./hashTableLinkedList";

interface IHashTable<T> {
  set(key: string, value: T): HashTable<T>;
  get(key: string): T;
  remove(key: string): HashTable<T>;
}

export class HashTable<T> implements IHashTable<T> {
  private buckets: Array<HashTableLinkedList<[string, T]>>;
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

  set(key: string, value: T): HashTable<T> {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashTableLinkedList();
    }

    this.buckets[index].append([key, value]);

    return this;
  }

  get(key: string): T | null {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return null;

    const item = bucket.getItemByCallback((item) => item[0] === key);
    if (!item) return null;

    return item[1];
  }

  remove(key: string): HashTable<T> {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return this;

    bucket.remove((item) => item[0] === key);

    return this;
  }
}
