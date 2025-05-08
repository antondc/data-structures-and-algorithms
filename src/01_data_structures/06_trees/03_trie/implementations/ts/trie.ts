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

    if (depth === word.length) {
      if (node.end) {
        node.end = false;

        return Object.keys(node.children).length === 0;
      }

      return false;
    }

    const char = word[depth];

    if (node.children[char]) {
      const shouldDelete = this.deleteWord(
        node.children[char],
        word,
        depth + 1
      );

      if (shouldDelete) {
        delete node.children[char];

        return Object.keys(node.children).length === 0 && !node.end;
      }

      return false;
    }
  }
}
