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

pub fn range_sum_bst(_input: Option<Rc<RefCell<TreeNode>>>) -> Option<()> {
  None
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn range_sum_first() {
    // Build input
    let node_3 = TreeNode::new(3, None, None);
    let node_7 = TreeNode::new(7, None, None);
    let node_5 = TreeNode::new(
      5,
      Some(Rc::new(RefCell::new(node_3))),
      Some(Rc::new(RefCell::new(node_7))),
    );
    let node_18 = TreeNode::new(7, None, None);
    let node_15 = TreeNode::new(5, None, Some(Rc::new(RefCell::new(node_18))));
    let node_10 = TreeNode::new(
      3,
      Some(Rc::new(RefCell::new(node_5))),
      Some(Rc::new(RefCell::new(node_15))),
    );

    // Process
    let input: Option<Rc<RefCell<TreeNode>>> = Some(Rc::new(RefCell::new(node_10)));
    let expected_output: Option<()> = None;
    let result = range_sum_bst(input);

    assert_eq!(expected_output, result);
  }
}
