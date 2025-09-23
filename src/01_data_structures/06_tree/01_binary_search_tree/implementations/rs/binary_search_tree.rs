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
          let new_left = Self::insert_node(boxed_node.left.take(), value);
          return Some(Box::new(Node {
            value: boxed_node.value,
            left: new_left,
            right: boxed_node.right,
          }));
        }
        if value > boxed_node.value {
          let new_right = Self::insert_node(boxed_node.right, value);

          return Some(Box::new(Node {
            value: boxed_node.value,
            left: boxed_node.left,
            right: new_right,
          }));
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
      Some(mut node) => {
        if value < node.value {
          let new_left = Self::delete_node(node.left.take(), value);

          return Some(Box::new(Node {
            value: node.value,
            left: new_left,
            right: node.right,
          }));
        }

        if value > node.value {
          let node_right = Self::delete_node(node.right.take(), value);

          return Some(Box::new(Node {
            value: node.value,
            left: node.left,
            right: node_right,
          }));
        }

        // Node to delete found
        if node.left.is_none() {
          return node.right;
        }

        if node.right.is_none() {
          return node.left;
        }

        // Node has two children, traverse with in-order sucessor
        // Get in-order sucessor, smallest node in right subtree.
        let right = node.right.take().unwrap();
        let sucessor_value = Self::min_value_node(&right).value;
        // Remove min value from subtree.
        let new_right = Self::delete_node(Some(right), sucessor_value);

        Some(Box::new(Node {
          value: sucessor_value,
          left: node.left,
          right: new_right,
        }))
      }
    }
  }

  fn min_value_node(node: &Box<Node>) -> &Box<Node> {
    match &node.left {
      Some(left) => Self::min_value_node(left),
      None => node,
    }
  }

  pub fn search(&self, value: i32) -> Option<&Node> {
    Self::search_node(self.root.as_ref(), value)
  }

  fn search_node(node: Option<&Box<Node>>, value: i32) -> Option<&Node> {
    match node {
      Some(node) if value == node.value => Some(node),
      Some(node) if value < node.value => Self::search_node(node.left.as_ref(), value),
      Some(node) => Self::search_node(node.right.as_ref(), value),
      None => None,
    }
  }

  pub fn length(&self) -> usize {
    Self::count_nodes(&self.root)
  }

  fn count_nodes(node: &Option<Box<Node>>) -> usize {
    match node {
      Some(node) => 1 + Self::count_nodes(&node.left) + Self::count_nodes(&node.right),
      None => 0,
    }
  }
}
