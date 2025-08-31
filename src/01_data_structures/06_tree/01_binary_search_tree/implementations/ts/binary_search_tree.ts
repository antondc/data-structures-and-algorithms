export class Node {
  value: number = null;
  left: Node = null;
  right: Node = null;

  constructor(value) {
    this.value = value;
  }
}

export class BinarySearchTree {
  root: Node = null;

  insert(value: number): BinarySearchTree {
    this.root = this.insertNode(this.root, value);

    return this;
  }

  private insertNode(node: Node, value: number): Node {
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  delete(value: number): BinarySearchTree {
    this.root = this.deleteNode(this.root, value);

    return this;
  }

  private deleteNode(node: Node, value: number): Node {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node is target
      if (!node.left) return node.right; // No left, replace with right
      if (!node.right) return node.left; // No right, replace with left

      // Node has two children, traverse with in-order sucessor
      const sucessor = this.minValueNode(node.right); // Get sucessor —deepest rights child leftmost leaf—.
      node.value = sucessor.value; // Set target as sucessor value.
      node.right = this.deleteNode(node.right, sucessor.value); // Remove min value from subtree.
    }

    return node;
  }

  private minValueNode(node: Node): Node {
    if (node.left) return this.minValueNode(node.left);

    return node;
  }

  search(value): Node {
    const result = this.searchNode(this.root, value);

    return result;
  }

  private searchNode(node: Node, value: number): Node {
    if (!node || node.value === value) return node;

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
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
}
