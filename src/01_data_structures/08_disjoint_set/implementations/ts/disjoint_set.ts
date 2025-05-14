export class DisjointSet {
  representatives: Array<number> = [];
  rank: Array<number> = [];

  constructor(size: number) {
    this.representatives = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  /* Returns the representative of the tree that 'index' belongs to.
     Here 'index' is the value, and `this.representatives[index]` the group’s current representative.
  */
  find(index: number): number {
    if (index >= this.representatives.length) {
      throw new Error("Index out of bound");
    }

    if (index == this.representatives[index]) {
      return this.representatives[index]; // Return representative of `index`.
    }

    // Path compression: set node’s representative to its representative’s representative.
    this.representatives[index] = this.find(this.representatives[index]);

    return this.representatives[index]; // Return representative of `index`.
  }

  union(a: number, b: number): DisjointSet {
    if (a >= this.representatives.length || b >= this.representatives.length) {
      throw new Error("Index out of bound");
    }

    const representativeA = this.find(a);
    const representativeB = this.find(b);

    // Same representative, both are part of same group, no action needed.
    if (representativeA === representativeB) {
      return this;
    }

    // Update the representative of the group with smaller representative rank as the representative of the group with the largest representative rank.
    if (this.rank[representativeA] < this.rank[representativeB]) {
      this.representatives[representativeA] = representativeB;
    } else if (this.rank[representativeA] > this.rank[representativeB]) {
      this.representatives[representativeB] = representativeA;
    } else {
      this.representatives[representativeB] = representativeA;
      // Update rank as if we were not doing path compression.
      this.rank[representativeA] = this.rank[representativeA] + 1;
    }

    return this;
  }

  connected(a: number, b: number): boolean {
    if (a >= this.representatives.length || b >= this.representatives.length) {
      throw new Error("Index out of bound");
    }

    return this.find(a) === this.find(b);
  }
}
