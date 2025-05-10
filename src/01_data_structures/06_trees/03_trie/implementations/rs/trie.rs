use crate::hash_table::hash_table::HashTable;

#[derive(Debug, PartialEq)]
pub struct Node {
  pub children: HashTable<Node>,
  pub end: bool,
}

impl Node {
  pub fn new() -> Node {
    return Node {
      children: HashTable::new(2),
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

    return node.end;
  }
}
