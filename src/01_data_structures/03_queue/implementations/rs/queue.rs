pub struct ArrayQueue<T> {
  storage: Vec<T>,
}

impl<T> ArrayQueue<T> {
  pub fn new() -> Self {
    ArrayQueue { storage: Vec::new() }
  }

  pub fn enqueue(mut self, value: T) -> Self {
    self.storage.push(value);

    return self;
  }

  pub fn dequeue(&mut self) -> Option<T> {
    if self.storage.len() == 0 {
      return None;
    }

    Some(self.storage.remove(0))
  }

  pub fn length(&self) -> usize {
    self.storage.len()
  }

  pub fn is_empty(&self) -> bool {
    self.storage.len() == 0
  }

  pub fn peek(&self) -> Option<&T> {
    self.storage.first()
  }
}
