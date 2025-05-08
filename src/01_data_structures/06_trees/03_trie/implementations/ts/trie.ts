class Node {
  end: boolean = false;
  children: Record<string, Node> = {};
}

export class Trie {
  root: Node = new Node();

  insert(string: string): Trie {
    const node = string.split("").reduce((node, char) => {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }

      return node.children[char];
    }, this.root);

    node.end = true;

    return this;
  }

  search(word: string): boolean {
    const node = word
      .split("")
      .reduce((node, char) => node?.children[char], this.root);

    return !!node?.end;
  }

  delete(word: string): Trie {
    this.deleteWord(this.root, word, 0);

    return this;
  }

  private deleteWord(node: Node, word: string, depth: number): boolean {
    if (!node) return false;

    // If we reached length of word
    if (depth === word.length) {
      // If is the end of word
      if (node.end) {
        node.end = false;

        // If node is a leaf —no more children—, return true.
        return Object.keys(node.children).length === 0;
      }

      // If node is not end, return false
      return false;
    }

    // Get current character
    const char = word[depth];

    // If char is not in children
    if (!node.children[char]) {
      // Word not present, nothing to delete
      return false;
    }

    // Check recursively if should delete
    const shouldDelete = this.deleteWord(node.children[char], word, depth + 1);

    // Delete char from children
    if (shouldDelete) {
      delete node.children[char];

      // Return true if current node is leaf and is not the end.
      return Object.keys(node.children).length === 0 && !node.end;
    }

    // Node still has valid children, do not delete.
    return false;
  }
}
