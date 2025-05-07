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

  #[test]
  fn deletes_node_from_empty_tree() {
    let mut bst = BinarySearchTree::new();
    bst.delete(1);

    let expected_result = BinarySearchTree { root: None };

    assert_eq!(bst, expected_result);
  }

  #[test]
  fn deletes_node_from_tree_with_single_node() {
    let mut bst = BinarySearchTree::new();
    bst.insert(1);
    bst.delete(1);

    let expected_result = BinarySearchTree { root: None };

    assert_eq!(bst, expected_result);
  }

  #[test]
  fn deletes_node_with_in_order_successor_from_several_nodes() {
    let mut bst = BinarySearchTree::new();
    bst.insert(20).insert(5).insert(10).insert(25);
    //     20
    //    /  \
    //   5    25
    //    \
    //    10

    bst.delete(20);
    //     25
    //    /
    //   5
    //    \
    //    10

    let expected_result = BinarySearchTree {
      root: Some(Node::new(25, Some(Node::new(5, None, Some(Node::new(10, None, None)))), None)),
    };

    assert_eq!(bst, expected_result);
  }

  #[test]
  fn deletes_leaf_node_from_deep_tree() {
    let mut bst = BinarySearchTree::new();
    bst.insert(40).insert(30).insert(20).insert(10).insert(45);
    //         40
    //        /  \
    //      30   45
    //     /
    //   20
    //  /
    // 10

    let expected_before = BinarySearchTree {
      root: Some(Node::new(
        40,
        Some(Node::new(30, Some(Node::new(20, Some(Node::new(10, None, None)), None)), None)),
        Some(Node::new(45, None, None)),
      )),
    };

    assert_eq!(bst, expected_before);

    bst.delete(10);

    let expected_after = BinarySearchTree {
      root: Some(Node::new(
        40,
        Some(Node::new(30, Some(Node::new(20, None, None)), None)),
        Some(Node::new(45, None, None)),
      )),
    };

    assert_eq!(bst, expected_after);
  }

  #[test]
  fn deletes_node_with_two_children() {
    let mut bst = BinarySearchTree::new();
    bst.insert(20).insert(10).insert(30).insert(25);
    //     20
    //    /  \
    //  10    30
    //        /
    //      25

    bst.delete(20);
    //     25
    //    /  \
    //  10    30

    let expected_result = BinarySearchTree {
      root: Some(Node::new(25, Some(Node::new(10, None, None)), Some(Node::new(30, None, None)))),
    };

    assert_eq!(bst, expected_result);
  }
}
