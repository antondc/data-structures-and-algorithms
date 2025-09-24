export class Node {
  value: number = null;
  left: Node = null;
  right: Node = null;

  constructor(value, left: Node | null = null, right: Node | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
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
      const newLeft = this.insertNode(node.left, value);
      return new Node(node.value, newLeft, node.right);
    } else if (value > node.value) {
      const newRight = this.insertNode(node.right, value);
      return new Node(node.value, node.left, newRight);
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
      const newLeft = this.deleteNode(node.left, value);
      return new Node(node.value, newLeft, node.right);
    } else if (value > node.value) {
      const newRight = this.deleteNode(node.right, value);
      return new Node(node.value, node.left, newRight);
    } else {
      // Node is target
      if (!node.left) return node.right; // No left, replace with right
      if (!node.right) return node.left; // No right, replace with left

      // Node has two children, traverse with in-order successor
      const successor = this.getLeftmostLeaf(node.right); // Get in-order successor, smallest node in right subtree.
      const newRight = this.deleteNode(node.right, successor.value); // Remove min value from subtree.
      const newNode = new Node(successor.value, node.left, newRight); // Set target as successor value.

      return newNode;
    }
  }

  private getLeftmostLeaf(node: Node): Node {
    if (!node.left) return node;

    return this.getLeftmostLeaf(node.left);
  }

  search(value): Node {
    return this.searchNode(this.root, value);
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
