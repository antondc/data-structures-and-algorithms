#[cfg(test)]
mod tests {
  use super::super::stack::Stack;

  #[test]
  fn creates_empty_queue() {
    let stack: Stack<i32> = Stack::new();

    assert_eq!(stack.is_empty(), true);
  }

  #[test]
  fn push_item_to_empty_queue() {
    let stack: Stack<i32> = Stack::new().push(1);

    assert_eq!(stack.is_empty(), false);
  }

  #[test]
  fn push_two_items_to_empty_queue() {
    let stack: Stack<i32> = Stack::new().push(1).push(2);

    assert_eq!(stack.is_empty(), false);
  }

  #[test]
  fn pop_item_from_empty_queue() {
    let mut stack: Stack<i32> = Stack::new();
    let pushd = stack.pop();

    assert_eq!(stack.is_empty(), true);
    assert_eq!(pushd, None);
  }

  #[test]
  fn pop_item_from_queue() {
    let mut stack: Stack<i32> = Stack::new().push(1).push(2);

    let first_item = stack.pop();
    assert_eq!(first_item, Some(2));
    let second_item = stack.pop();
    assert_eq!(second_item, Some(1));
  }

  #[test]
  fn returns_length_for_empty_queue() {
    let stack: Stack<i32> = Stack::new();

    assert_eq!(stack.length(), 0);
  }

  #[test]
  fn returns_length_for_queue() {
    let mut stack: Stack<i32> = Stack::new().push(1).push(2);
    stack.pop();
    assert_eq!(stack.length(), 1);
    stack.pop();
    assert_eq!(stack.length(), 0);
    stack.pop();
    assert_eq!(stack.length(), 0);
  }

  #[test]
  fn is_empty_for_empty_queue() {
    let stack: Stack<i32> = Stack::new();
    assert_eq!(stack.is_empty(), true);
  }

  #[test]
  fn is_empty_when_queue_has_values() {
    let stack: Stack<i32> = Stack::new().push(1);
    assert_eq!(stack.is_empty(), false);
  }

  #[test]
  fn peeks() {
    let stack: Stack<i32> = Stack::new();
    let no_item = stack.peek();
    assert_eq!(no_item, None.as_ref());

    let stack_updated = stack.push(1).push(2);
    let first_item = stack_updated.peek();
    assert_eq!(first_item, Some(2).as_ref());
  }
}
