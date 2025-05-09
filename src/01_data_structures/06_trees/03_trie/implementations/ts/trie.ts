class Node {
  end: boolean = false;
  children: Record<string, Node> = {};
}

export class Trie {
  root: Node = new Node();

  insert(word: string): Trie {
    // Iterate string tracking nodes from root.
    const node = word.split("").reduce((acc, char) => {
      if (!acc.children[char]) {
        acc.children[char] = new Node(); // Add node with `char` as key.
      }

      return acc.children[char]; // Replace acc with current node.
    }, this.root);

    node.end = true; // End of word, mark it.

    return this;
  }

  search(word: string): boolean {
    // Iterate string tracking nodes from root to reach the end.
    const node = word
      .split("")
      .reduce((acc, char) => acc?.children[char], this.root);

    return !!node?.end; // If last character is marked as end, word found.
  }

  delete(word: string): Trie {
    this.deleteWord(this.root, word, 0);

    return this;
  }

  private deleteWord(node: Node, word: string, depth: number): boolean {
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

    const shouldDeleteChild = this.deleteWord(child, word, depth + 1); // Check recursively if next node should be deleted.

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
