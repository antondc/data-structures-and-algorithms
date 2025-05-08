class Node {
  end: boolean = false;
  children: Record<string, Node> = {};
}

export class Trie {
  root: Node = new Node();

  insert(string: string): Trie {
    const node = string.split("").reduce((root, char) => {
      if (!root.children[char]) {
        root.children[char] = new Node();
      }

      return root.children[char];
    }, this.root);

    node.end = true;

    return this;
  }
}
