#[cfg(test)]
mod tests {
  use super::super::trie::{Node, Trie};

  #[test]
  fn trie_is_instantiated() {
    let trie = Trie::new();
    assert_eq!(trie, Trie { root: Box::new(Node::new()) });
  }

  #[test]
  fn inserts_data_into_trie() {
    let mut trie = Trie::new();
    trie.insert("ab");

    let mut b_node = Node::new();
    b_node.end = true;

    let mut a_node = Node::new();
    a_node.children.set("b", b_node);

    let mut root = Box::new(Node::new());
    root.children.set("a", a_node);

    let expected = Trie { root };

    assert_eq!(trie, expected);
  }

  #[test]
  fn inserts_empty_string_into_trie_initial_state() {
    let mut trie = Trie::new();
    trie.insert("");

    let mut expected_root = Box::new(Node::new());
    expected_root.end = true;

    let expected = Trie { root: expected_root };
    assert_eq!(trie, expected);
  }

  #[test]
  fn inserts_empty_then_a_into_trie() {
    let mut trie = Trie::new();
    trie.insert("");
    trie.insert("a");

    let mut a_node = Node::new();
    a_node.end = true;

    let mut expected_root = Box::new(Node::new());
    expected_root.end = true;
    expected_root.children.set("a", a_node);

    let expected = Trie { root: expected_root };
    assert_eq!(trie, expected);
  }

  #[test]
  fn inserts_empty_then_a_then_b_into_trie() {
    let mut trie = Trie::new();
    trie.insert("");
    trie.insert("a");
    trie.insert("b");

    let mut a_node = Node::new();
    a_node.end = true;

    let mut b_node = Node::new();
    b_node.end = true;

    let mut expected_root = Box::new(Node::new());
    expected_root.end = true;
    expected_root.children.set("a", a_node);
    expected_root.children.set("b", b_node);

    let expected = Trie { root: expected_root };
    assert_eq!(trie, expected);
  }

  #[test]
  fn reinserts_empty_after_other_insertions() {
    let mut trie = Trie::new();
    trie.insert("");
    trie.insert("a");
    trie.insert("b");
    trie.insert("");

    let mut a_node = Node::new();
    a_node.end = true;

    let mut b_node = Node::new();
    b_node.end = true;

    let mut expected_root = Box::new(Node::new());
    expected_root.end = true;
    expected_root.children.set("a", a_node);
    expected_root.children.set("b", b_node);

    let expected = Trie { root: expected_root };
    assert_eq!(trie, expected);
  }

  #[test]
  fn searches_a_word_from_an_empty_trie() {
    let mut trie = Trie::new();
    let found = trie.search("a");

    assert!(!found);
  }

  #[test]
  fn searches_a_single_character_from_a_populated_trie() {
    let mut trie = Trie::new();
    let found = trie.insert("a").search("a");

    assert!(found);
  }

  #[test]
  fn searches_a_word_from_a_populated_trie() {
    let mut trie = Trie::new();
    let found = trie.insert("ab").search("ab");

    assert!(found);
  }

  #[test]
  fn searches_a_word_from_a_populated_trie_with_several_words() {
    let mut trie = Trie::new();
    trie.insert("ab").insert("abc").insert("ac");

    let found_ab = trie.search("ab");
    assert!(found_ab);

    let found_abc = trie.search("abc");
    assert!(found_abc);

    let found_ac = trie.search("ac");
    assert!(found_ac);
  }

  #[test]
  fn deletes_word_from_empty_trie() {
    let mut trie = Trie::new();
    trie.delete("abc");

    let expected = Trie { root: Box::new(Node::new()) };

    assert_eq!(trie, expected);
  }

  #[test]
  fn deletes_word_from_populated_trie() {
    let mut trie = Trie::new();
    trie.insert("abc");

    // expected trie after insert
    let mut c_node = Node::new();
    c_node.end = true;

    let mut b_node = Node::new();
    b_node.children.set("c", c_node);

    let mut a_node = Node::new();
    a_node.children.set("b", b_node);

    let mut root = Box::new(Node::new());
    root.children.set("a", a_node);

    let expected_after_insert = Trie { root };
    assert_eq!(trie, expected_after_insert);

    trie.delete("abc");

    let expected = Trie { root: Box::new(Node::new()) };

    assert_eq!(trie, expected);
  }

  #[test]
  fn deletes_word_with_longer_word_remaining() {
    let mut trie = Trie::new();
    trie.insert("abc");
    trie.insert("abcd");

    // expected trie after inserting "abc" and "abcd"
    let mut d_node = Node::new();
    d_node.end = true;

    let mut c_node = Node::new();
    c_node.end = true;
    c_node.children.set("d", d_node);

    let mut b_node = Node::new();
    b_node.children.set("c", c_node);

    let mut a_node = Node::new();
    a_node.children.set("b", b_node);

    let mut root = Box::new(Node::new());
    root.children.set("a", a_node);

    let expected_after_both_inserted = Trie { root };
    assert_eq!(trie, expected_after_both_inserted);

    trie.delete("abc");

    // expected after deleting "abc" (but not "abcd")
    let mut d_node = Node::new();
    d_node.end = true;

    let mut c_node = Node::new();
    c_node.children.set("d", d_node);

    let mut b_node = Node::new();
    b_node.children.set("c", c_node);

    let mut a_node = Node::new();
    a_node.children.set("b", b_node);

    let mut root = Box::new(Node::new());
    root.children.set("a", a_node);

    let expected_after_deleting_abc = Trie { root };
    assert_eq!(trie, expected_after_deleting_abc);

    trie.delete("abcd");

    let expected = Trie { root: Box::new(Node::new()) };

    assert_eq!(trie, expected);
  }
}
