use std::cell::RefCell;
use std::rc::Rc;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
  pub val: i32,
  pub left: Option<Rc<RefCell<TreeNode>>>,
  pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
  #[inline]
  pub fn new(
    val: i32,
    left: Option<Rc<RefCell<TreeNode>>>,
    right: Option<Rc<RefCell<TreeNode>>>,
  ) -> Self {
    TreeNode { val, left, right }
  }
}

pub fn range_sum_bst(input: Option<Rc<RefCell<TreeNode>>>, min: i32, max: i32) -> i32 {
  let mut sum = 0;

  if let Some(root_node) = input {
    let tree = root_node.borrow();

    if tree.val <= max && tree.val >= min {
      sum += &tree.val
    }

    if let Some(root_node_left) = tree.left.clone() {
      let child_left: Option<Rc<RefCell<TreeNode>>> = Some(root_node_left);

      let sum_left = range_sum_bst(child_left, min, max);
      sum += sum_left;
    }

    if let Some(root_node_right) = tree.right.clone() {
      let child_right: Option<Rc<RefCell<TreeNode>>> = Some(root_node_right);

      let sum_right = range_sum_bst(child_right, min, max);
      sum += sum_right;
    }

    sum
  } else {
    sum
  }
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn input_is_none() {
    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = None;
    let expected_output: i32 = 0;
    let result = range_sum_bst(input, 0, 0);

    assert_eq!(expected_output, result);
  }

  #[test]
  fn input_is_tree_only_root_node() {
    // Build input
    let node_1 = TreeNode::new(1, None, None);

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_1)));
    let expected_output: i32 = 1;
    let result = range_sum_bst(input, 0, 1);

    assert_eq!(expected_output, result);
  }

  #[test]
  fn input_is_tree_only_root_and_children_nodes() {
    // Build input
    let node_3 = TreeNode::new(3, None, None);
    let node_2 = TreeNode::new(2, None, None);
    let node_1 = TreeNode::new(
      1,
      Some(Rc::new(RefCell::new(node_2))),
      Some(Rc::new(RefCell::new(node_3))),
    );

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_1)));
    let expected_output: i32 = 6;
    let result = range_sum_bst(input, 0, 4);

    assert_eq!(expected_output, result);
  }

  #[test]
  fn input_is_example_1() {
    // Build input
    let node_3 = TreeNode::new(3, None, None);
    let node_7 = TreeNode::new(7, None, None);
    let node_5 = TreeNode::new(
      5,
      Some(Rc::new(RefCell::new(node_3))),
      Some(Rc::new(RefCell::new(node_7))),
    );
    let node_18 = TreeNode::new(18, None, None);
    let node_15 = TreeNode::new(15, None, Some(Rc::new(RefCell::new(node_18))));
    let node_10 = TreeNode::new(
      10,
      Some(Rc::new(RefCell::new(node_5))),
      Some(Rc::new(RefCell::new(node_15))),
    );

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_10)));
    let expected_output: i32 = 32;
    let result = range_sum_bst(input, 7, 15);

    assert_eq!(expected_output, result);
  }
}
