export class Stack<T> {
  private storage: Array<T> = [];

  push(value: any): Stack<T> {
    this.storage.push(value);

    return this;
  }

  pop(): T | null {
    if (this.storage.length === 0) {
      return null;
    }

    return this.storage.pop();
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

    return this.storage[this.storage.length - 1];
  }
}
