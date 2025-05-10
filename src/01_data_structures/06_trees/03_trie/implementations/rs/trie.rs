use std::collections::HashMap;

#[derive(Debug, PartialEq)]
pub struct Node {
  pub children: HashMap<String, Node>,
  pub end: bool,
}

impl Node {
  pub fn new() -> Node {
    return Node {
      children: HashMap::new(),
      end: false,
    };
  }
}

#[derive(Debug, PartialEq)]
pub struct Trie {
  pub root: Node,
}

impl Trie {
  pub fn new() -> Trie {
    return Trie { root: Node::new() };
  }

  pub fn insert(&mut self, word: &str) -> &mut Self {
    let mut node = &mut self.root;

    for c in word.chars() {
      let key = c.to_string();

      if !node.children.contains_key(&key) {
        node.children.insert(key, Node::new());
      }

      node = node.children.get_mut(&c.to_string()).unwrap();
    }

    node.end = true;

    self
  }
}
