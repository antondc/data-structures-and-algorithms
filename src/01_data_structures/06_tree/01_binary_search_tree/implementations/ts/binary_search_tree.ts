export type Node = {
  value: number;
  left: Node;
  right: Node;
};

export class BinarySearchTree {
  root: Node = null;

  insert(value: number): BinarySearchTree {
    this.root = this.insertNode(this.root, value);

    return this;
  }

  private insertNode(node: Node, value: number): Node {
    if (!node) return { value, left: null, right: null };

    if (value < node.value) {
      const newLeft = this.insertNode(node.left, value);
      return { ...node, left: newLeft };
    } else if (value > node.value) {
      const newRight = this.insertNode(node.right, value);
      return { ...node, right: newRight };
    } else {
      return node;
    }
  }

  delete(value: number): BinarySearchTree {
    this.root = this.deleteNode(this.root, value);

    return this;
  }

  private deleteNode(node: Node, value: number): Node {
    if (!node) return null;

    if (value < node.value) {
      const newLeft = this.deleteNode(node.left, value);
      return { ...node, left: newLeft };
    } else if (value > node.value) {
      const newRight = this.deleteNode(node.right, value);
      return { ...node, right: newRight };
    } else {
      // Node is target
      if (!node.left) return node.right; // No left, replace with right
      if (!node.right) return node.left; // No right, replace with left

      // Node has two children, traverse with in-order successor
      const successor = this.getLeftmostLeaf(node.right); // Get in-order successor, smallest node in right subtree.
      const newRight = this.deleteNode(node.right, successor.value); // Remove min value from subtree.
      const newNode = {
        value: successor.value,
        left: node.left,
        right: newRight,
      }; // Set target as successor value.

      return newNode;
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
}
