#[cfg(test)]
mod tests {
  use super::super::binary_search_tree::{BinarySearchTree, Node};

  #[test]
  fn binary_search_tree_is_instantiated() {
    let bst = BinarySearchTree::new();
    assert!(bst.root.is_none());
  }

  #[test]
  fn inserts_node_into_empty_tree() {
    let mut bst = BinarySearchTree::new();
    assert!(bst.root.is_none());

    bst.insert(1);
    assert_eq!(bst.root.as_ref().unwrap().value, 1);
  }

  #[test]
  fn inserts_nodes_without_creating_duplicates() {
    let mut bst = BinarySearchTree::new();
    bst.insert(5).insert(1).insert(9).insert(4).insert(6).insert(2).insert(8);
    let expected_result = BinarySearchTree {
      root: Some(Node::new(
        5,
        Some(Node::new(1, None, Some(Node::new(4, Some(Node::new(2, None, None)), None)))),
        Some(Node::new(9, Some(Node::new(6, None, Some(Node::new(8, None, None)))), None)),
      )),
    };

    assert_eq!(bst, expected_result);
  }

  #[test]
  fn inserts_node_into_tree_with_existing_greater_node_value() {
    let mut bst = BinarySearchTree::new();
    bst.insert(20).insert(5).insert(10).insert(25);

    let expected_result = BinarySearchTree {
      root: Some(Node::new(
        20,
        Some(Node::new(5, None, Some(Node::new(10, None, None)))),
        Some(Node::new(25, None, None)),
      )),
    };

    assert_eq!(bst, expected_result);
  }
}
