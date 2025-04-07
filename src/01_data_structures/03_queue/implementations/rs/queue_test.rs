#[cfg(test)]
mod tests {
  use super::super::queue::ArrayQueue;

  #[test]
  fn creates_empty_queue() {
    let array_queue: ArrayQueue<i32> = ArrayQueue::new();

    assert_eq!(array_queue.is_empty(), true);
  }

  #[test]
  fn enqueue_item_to_empty_queue() {
    let array_queue: ArrayQueue<i32> = ArrayQueue::new().enqueue(1);

    assert_eq!(array_queue.is_empty(), false);
  }

  #[test]
  fn enqueue_two_items_to_empty_queue() {
    let array_queue: ArrayQueue<i32> = ArrayQueue::new().enqueue(1).enqueue(2);

    assert_eq!(array_queue.is_empty(), false);
  }

  #[test]
  fn dequeue_item_from_empty_queue() {
    let mut array_queue: ArrayQueue<i32> = ArrayQueue::new();
    let enqueued = array_queue.dequeue();

    assert_eq!(array_queue.is_empty(), true);
    assert_eq!(enqueued, None);
  }

  #[test]
  fn dequeue_item_from_queue() {
    let mut array_queue: ArrayQueue<i32> = ArrayQueue::new().enqueue(1).enqueue(2);

    let first_item = array_queue.dequeue();
    assert_eq!(first_item, Some(1));
    let second_item = array_queue.dequeue();
    assert_eq!(second_item, Some(2));
  }

  #[test]
  fn returns_length_for_empty_queue() {
    let array_queue: ArrayQueue<i32> = ArrayQueue::new();

    assert_eq!(array_queue.length(), 0);
  }

  #[test]
  fn returns_length_for_queue() {
    let mut array_queue: ArrayQueue<i32> = ArrayQueue::new().enqueue(1).enqueue(2);
    array_queue.dequeue();
    assert_eq!(array_queue.length(), 1);
    array_queue.dequeue();
    assert_eq!(array_queue.length(), 0);
    array_queue.dequeue();
    assert_eq!(array_queue.length(), 0);
  }

  #[test]
  fn is_empty_for_empty_queue() {
    let array_queue: ArrayQueue<i32> = ArrayQueue::new();
    assert_eq!(array_queue.is_empty(), true);
  }

  #[test]
  fn is_empty_when_queue_has_values() {
    let array_queue: ArrayQueue<i32> = ArrayQueue::new().enqueue(1);
    assert_eq!(array_queue.is_empty(), false);
  }

  #[test]
  fn peeks() {
    let mut array_queue: ArrayQueue<i32> = ArrayQueue::new().enqueue(1).enqueue(2);
    let first_item = array_queue.peek();
    assert_eq!(first_item, Some(1).as_ref());

    let dequeued_first_item = array_queue.dequeue();
    assert_eq!(dequeued_first_item, Some(1));
    let dequeued_second_item = array_queue.dequeue();
    assert_eq!(dequeued_second_item, Some(2));
    assert_eq!(array_queue.is_empty(), true);
  }
}
