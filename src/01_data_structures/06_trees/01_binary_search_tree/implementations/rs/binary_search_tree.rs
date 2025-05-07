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
  pub fn delete(&mut self, value: i32) -> &mut Self {
    self.root = Self::delete_node(self.root.take(), value);

    self
  }

  fn delete_node(node: Option<Box<Node>>, value: i32) -> Option<Box<Node>> {
    match node {
      None => None,
      Some(mut boxed_node) => {
        if value < boxed_node.value {
          boxed_node.left = Self::delete_node(boxed_node.left.take(), value);

          return Some(boxed_node);
        }

        if value > boxed_node.value {
          boxed_node.right = Self::delete_node(boxed_node.right.take(), value);

          return Some(boxed_node);
        }

        // Node to delete found
        if boxed_node.left.is_none() {
          return boxed_node.right;
        }

        if boxed_node.right.is_none() {
          return boxed_node.left;
        }

        // Node has two children, traverse with in-order sucessor
        let successor_value = Self::min_value_node(boxed_node.right.as_ref().unwrap()).value; // Get sucessor —deepest rights child leftmost leaf—.
        boxed_node.value = successor_value; // Set target as sucessor value.
        boxed_node.right = Self::delete_node(boxed_node.right, successor_value); // Remove min value from subtree.

        Some(boxed_node)
      }
    }
  }

  fn min_value_node(mut node: &Box<Node>) -> &Box<Node> {
    while let Some(ref left) = node.left {
      node = left;
    }
    node
  }
}
