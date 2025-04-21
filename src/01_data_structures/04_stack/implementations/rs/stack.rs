pub struct Stack<T> {
  storage: Vec<T>,
}

impl<T> Stack<T> {
  pub fn new() -> Self {
    Stack { storage: Vec::new() }
  }

  pub fn push(mut self, value: T) -> Self {
    self.storage.push(value);

    return self;
  }

  pub fn pop(&mut self) -> Option<T> {
    if self.storage.len() == 0 {
      return None;
    }

    self.storage.pop()
  }

  pub fn length(&self) -> usize {
    self.storage.len()
  }

  pub fn is_empty(&self) -> bool {
    self.storage.len() == 0
  }

  pub fn peek(&self) -> Option<&T> {
    self.storage.last()
  }
}
