class Node {
  end: boolean = false;
  children: Record<string, Node> = {};
}

export class Trie {
  root: Node = new Node();

  insert(word: string): Trie {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }

      node = node.children[char];
    }
    node.end = true;

    return this;
  }

  search(word: string): boolean {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }

      node = node.children[char];
    }

    return !!node.end;
  }

  delete(word: string): Trie {
    this.deleteNode(this.root, word, 0);

    return this;
  }

  private deleteNode(node: Node, word: string, depth: number): boolean {
    // Reached final node of word
    if (depth === word.length) {
      // If it is marked as end of word
      if (node.end) {
        node.end = false; // Unset `end`, node can be removed.
        // If node has no children, it is leaf, remove it.
        return Object.keys(node.children).length === 0;
      }
    }

    const char = word[depth];
    const child = node.children[char];
    if (!child) return false; // If no child, word not present, nothing to delete.

    const shouldDeleteChild = this.deleteNode(child, word, depth + 1); // Check recursively if next node should be deleted.

    // Delete
    if (shouldDeleteChild) {
      delete node.children[char];
      // If node is leaf, and is not an end of another word, delete it.
      return Object.keys(node.children).length === 0 && !node.end;
    }

    // Otherwise, delete it
    return false;
  }

  suggest(prefix: string): Array<string> {
    const node = prefix
      .split("")
      .reduce((acc, char) => acc.children[char], this.root);
    if (!node) return [];
    const results = [];
    this.depthFirstSearch(node, prefix, results);

    return results;
  }

  depthFirstSearch(node: Node, prefix: string, results: Array<string>) {
    if (node.end) {
      results.push(prefix);
    }

    for (const [char, child] of Object.entries(node.children)) {
      this.depthFirstSearch(child, prefix + char, results);
    }
  }
}
