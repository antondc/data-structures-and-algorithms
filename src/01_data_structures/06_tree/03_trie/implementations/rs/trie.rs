use crate::hash_table::hash_table::HashTable;

pub const ALPHABET_SIZE: usize = 27;

#[derive(Debug, PartialEq)]
pub struct Node {
  pub children: HashTable<Node>,
  pub end: bool,
}

impl Node {
  pub fn new() -> Node {
    return Node {
      children: HashTable::new(ALPHABET_SIZE),
      end: false,
    };
  }
}

#[derive(Debug, PartialEq)]
pub struct Trie {
  pub root: Box<Node>,
}

impl Trie {
  pub fn new() -> Trie {
    return Trie { root: Box::new(Node::new()) };
  }

  pub fn insert(&mut self, word: &str) -> &mut Self {
    let mut node = &mut self.root;

    for unicode in word.chars() {
      let key = unicode.to_string();
      if !node.children.has(&key) {
        node.children.set(&key, Node::new());
      }
      node = node.children.get_mut(&key).unwrap();
    }

    node.end = true;

    self
  }
  pub fn search(&mut self, word: &str) -> bool {
    let mut node = &mut self.root;

    for unicode in word.chars() {
      let key = unicode.to_string();

      if !node.children.has(&key) {
        return false;
      }
      node = node.children.get_mut(&key).unwrap();
    }

    node.end
  }

  pub fn delete(&mut self, word: &str) -> &mut Self {
    Self::delete_node(&mut self.root, word, 0);

    self
  }

  fn delete_node(node: &mut Node, word: &str, depth: usize) -> bool {
    if word.len() == depth {
      if node.end {
        node.end = false;

        return node.children.is_empty();
      }

      return false;
    }

    let key = word.chars().nth(depth).unwrap().to_string();
    if let Some(child) = node.children.get_mut(&key) {
      let should_delete = Self::delete_node(child, word, depth + 1);
      if should_delete {
        node.children.remove(&key);

        return node.children.is_empty() && !node.end;
      }
    }

    false
  }

  pub fn suggest(&self, prefix: &str) -> Vec<String> {
    let mut node: &Node = self.root.as_ref();
    // Iterate prefix to reach the Node corresponding to last character of prefix.
    for unicode in prefix.chars() {
      let key = unicode.to_string();

      // If no key, no suggestions.
      if !node.children.has(&key) {
        return vec![];
      }

      node = node.children.get(&key).unwrap();
    }

    // Initialize vector to store results.
    let mut results: Vec<String> = Vec::new();
    // Initialize vector to store the possible prefix paths.
    let mut buffer: Vec<char> = prefix.chars().collect();

    // Start iterating tree from the Node corresponding to last character of prefix.
    Self::depth_first_breadth(node, &mut buffer, &mut results);

    results
  }

  fn depth_first_breadth(node: &Node, buffer: &mut Vec<char>, results: &mut Vec<String>) {
    // If node is marked as end, push word to results.
    if node.end {
      results.push(buffer.iter().collect());
    }

    // Iterate all hash table contents through `iter()` method.
    for (key, child_node) in node.children.iter() {
      let key_char = key.chars().next().unwrap(); // Get key character.
      buffer.push(key_char); // Push key character to the buffer.
      Self::depth_first_breadth(child_node, buffer, results); // Search from this node onwards with new buffer.
      buffer.pop(); // Extract character to continue with new node.
    }
  }
}
