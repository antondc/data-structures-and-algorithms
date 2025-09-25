type Node = {
  value: number;
  left: Node;
  right: Node;
  height: number;
};

export class AvlTree {
  root: Node = null;

  insert(value: number): AvlTree {
    this.root = this.insertNode(this.root, value);

    return this;
  }

  private insertNode(node: Node, value: number): Node {
    if (!node) return { value, left: null, right: null, height: 1 };

    if (value < node.value) {
      const left = this.insertNode(node.left, value);
      const updated = {
        ...node,
        left,
        height: this.updateHeight({ ...node, left }),
      };
      return this.balance(updated);
    } else if (value > node.value) {
      const right = this.insertNode(node.right, value);
      const updated = {
        ...node,
        right,
        height: this.updateHeight({ ...node, right }),
      };
      return this.balance(updated);
    } else {
      return node;
    }
  }

  delete(value: number): AvlTree {
    this.root = this.deleteNode(this.root, value);

    return this;
  }

  private deleteNode(node: Node, value: number): Node {
    if (!node) return null;

    if (value < node.value) {
      const left = this.deleteNode(node.left, value);
      const updated = {
        ...node,
        left,
        height: this.updateHeight({ ...node, left }),
      };
      return this.balance(updated);
    } else if (value > node.value) {
      const right = this.deleteNode(node.right, value);
      const updated = {
        ...node,
        right,
        height: this.updateHeight({ ...node, right }),
      };
      return this.balance(updated);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const successor = this.getLeftmostLeaf(node.right);
      const newRight = this.deleteNode(node.right, successor.value);
      const nodeWithRight = {
        value: successor.value,
        left: node.left,
        right: newRight,
        height: 0,
      };
      const height = this.updateHeight(nodeWithRight);
      const nodeWithHeight = { ...nodeWithRight, height };

      return this.balance(nodeWithHeight);
    }
  }

  private getLeftmostLeaf(node: Node): Node {
    if (!node.left) return node;

    return this.getLeftmostLeaf(node.left);
  }

  search(value: number): Node {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: Node, value: number): Node {
    if (!node || value === node.value) return node;

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    }
  }

  length(): number {
    return this.countNodes(this.root);
  }

  private countNodes(node: Node): number {
    if (!node) return 0;

    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  private rotateRight(y: Node): Node {
    const x = y.left;
    const T2 = x.right;

    const yToRight = {
      ...y,
      left: T2,
      height: this.updateHeight({ ...y, left: T2 }),
    };
    const leftToY = {
      ...x,
      right: yToRight,
      height: this.updateHeight(x),
    };

    return leftToY;
  }

  private rotateLeft(y: Node): Node {
    const x = y.right;
    const T2 = x.left;

    const yToLeft = {
      ...y,
      right: T2,
      height: this.updateHeight({ ...x, right: T2 }),
    };
    const rightToY = {
      ...x,
      left: yToLeft,
      height: this.updateHeight(x),
    };

    return rightToY;
  }

  private balance(node: Node): Node {
    const balanceFactor = this.getBalance(node);

    // Left heavy
    if (balanceFactor > 1) {
      // Left-Right case
      if (this.getBalance(node.left) < 0) {
        const left = this.rotateLeft(node.left);
        return this.rotateRight({ ...node, left });
      }

      return this.rotateRight(node);
    }

    // Right heavy
    if (balanceFactor < -1) {
      // Right-Left case
      if (this.getBalance(node.right) > 0) {
        const right = this.rotateRight(node.right);
        return this.rotateLeft({ ...node, right });
      }

      return this.rotateLeft(node);
    }

    return node;
  }

  private getHeight(node: Node): number {
    return node ? node.height : 0;
  }

  private updateHeight(node: Node): number {
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  private getBalance(node: Node): number {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }
}
