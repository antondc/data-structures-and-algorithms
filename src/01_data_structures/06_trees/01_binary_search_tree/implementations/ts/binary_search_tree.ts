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
    if (!this.root) {
      this.root = new Node(value);

      return this;
    }

    this.insertNode(this.root, value);

    return this;
  }

  private insertNode(node: Node, value: number) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.insertNode(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.insertNode(node.right, value);
      }
    }
  }

  delete(value: number): BinarySearchTree {
    if (!this.root) {
      return this;
    }

    this.root = this.deleteNode(this.root, value);

    return this;
  }

  private deleteNode(node: Node, value: number): Node {
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
    return node;
  }

  search(): number {
    return this.root.value;
  }
}
