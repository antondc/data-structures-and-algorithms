#[derive(Debug, PartialEq)]
pub struct Node {
  pub value: i32,
  pub left: Option<Box<Node>>,
  pub right: Option<Box<Node>>,
}

impl Node {
  pub fn new(value: i32, left: Option<Box<Node>>, right: Option<Box<Node>>) -> Box<Self> {
    Box::new(Node { value, left, right })
  }
}

#[derive(Debug, PartialEq)]
pub struct BinarySearchTree {
  pub root: Option<Box<Node>>,
}

impl BinarySearchTree {
  pub fn new() -> BinarySearchTree {
    return BinarySearchTree { root: None };
  }

  pub fn insert(&mut self, value: i32) -> &mut Self {
    self.root = Self::insert_node(self.root.take(), value);

    self
  }

  fn insert_node(node: Option<Box<Node>>, value: i32) -> Option<Box<Node>> {
    match node {
      None => Some(Box::new(Node {
        value,
        left: None,
        right: None,
      })),
      Some(mut boxed_node) => {
        if value < boxed_node.value {
          boxed_node.left = Self::insert_node(boxed_node.left.take(), value)
        }
        if value > boxed_node.value {
          boxed_node.right = Self::insert_node(boxed_node.right, value)
        }

        Some(boxed_node)
      }
    }
  }
}
