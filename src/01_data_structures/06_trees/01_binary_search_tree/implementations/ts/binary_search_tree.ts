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

  delete(): BinarySearchTree {
    return this;
  }

  search(): number {
    return this.root.value;
  }

  minValueNode(tree: BinarySearchTree): Node {
    return tree.root;
  }
}
