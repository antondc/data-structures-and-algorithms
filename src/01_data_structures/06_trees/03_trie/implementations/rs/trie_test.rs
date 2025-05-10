#[cfg(test)]
mod tests {
  use std::collections::HashMap;

  use super::super::trie::{Node, Trie};

  #[test]
  fn trie_is_instantiated() {
    let trie = Trie::new();
    assert_eq!(trie, Trie { root: Node::new() });
  }

  #[test]
  fn inserts_data_into_trie() {
    let mut trie = Trie::new();
    trie.insert("ab");

    let expected = Trie {
      root: Node {
        end: false,
        children: HashMap::from([(
          "a".to_string(),
          Node {
            end: false,
            children: HashMap::from([(
              "b".to_string(),
              Node {
                end: true,
                children: HashMap::new(),
              },
            )]),
          },
        )]),
      },
    };

    assert_eq!(trie, expected);
  }
}
