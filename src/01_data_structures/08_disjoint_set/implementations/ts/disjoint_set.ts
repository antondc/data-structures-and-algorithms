export class DisjointSet {
  root: Array<number> = [];
  rank: Array<number> = [];

  constructor(size: number) {
    this.root = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  find(index: number): number {
    if (index >= this.root.length) {
      throw new Error("Index out of bound");
    }

    if (this.root[index] !== index) {
      this.root[index] = this.find(this.root[index]);

      this.root[index];
    }

    return this.root[index];
  }

  union(a: number, b: number): DisjointSet {
    if (a >= this.root.length || b >= this.root.length) {
      throw new Error("Index out of bound");
    }

    const rootA = this.find(a);
    const rootB = this.find(b);

    if (rootA === rootB) {
      return this;
    }

    if (this.rank[rootA] < this.rank[rootB]) {
      this.root[rootA] = rootB;
    } else if (this.rank[rootA] > this.rank[rootB]) {
      this.root[rootB] = rootA;
    } else {
      this.root[rootB] = rootA;
      this.rank[rootA] = this.rank[rootA] + 1;
    }

    return this;
  }

  connected(a: number, b: number): boolean {
    if (a >= this.root.length || b >= this.root.length) {
      throw new Error("Index out of bound");
    }

    return this.find(a) === this.find(b);
  }
}
