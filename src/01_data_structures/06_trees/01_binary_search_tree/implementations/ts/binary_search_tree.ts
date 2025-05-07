class Node {
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
    } else {
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
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const min = this.minValueNode(node.right);
      node.value = min.value;
      node.right = this.deleteNode(node.right, min.value);
    }

    return node;
  }

  private minValueNode(node: Node): Node {
    while (node.left) {
      node = node.left;
    }

    return node;
  }

  search(): number {
    return this.root.value;
  }
}
