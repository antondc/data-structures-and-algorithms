export class ArrayQueue<T> {
  private storage: Array<T> = [];

  enqueue(value: any): ArrayQueue<T> {
    this.storage.push(value);

    return this;
  }

  dequeue(): T | null {
    if (this.storage.length === 0) {
      return null;
    }

    return this.storage.shift();
  }

  length(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.storage[0];
  }
}
