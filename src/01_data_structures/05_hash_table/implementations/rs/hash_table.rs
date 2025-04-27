use std::collections::LinkedList;

pub struct HashTableItem<T> {
  key: String,
  value: T,
}

pub struct HashTable<T> {
  buckets: Vec<LinkedList<HashTableItem<T>>>,
  size: usize,
}

impl<T: std::fmt::Debug> HashTable<T> {
  pub fn new(size: usize) -> Self {
    let mut buckets = Vec::with_capacity(size);

    for _ in 0..size {
      buckets.push(LinkedList::new());
    }

    HashTable { buckets, size }
  }

  fn hash(&self, key: &str) -> usize {
    let mut hash = 0;

    for i in 0..key.len() {
      hash = hash + key.chars().nth(i).unwrap() as usize
    }

    return hash % self.size;
  }

  pub fn buckets(&self) -> &Vec<LinkedList<HashTableItem<T>>> {
    &self.buckets
  }

  pub fn set(&mut self, key: &str, value: T) -> &mut Self {
    let bucket_index = self.hash(key);

    if self.buckets[bucket_index].is_empty() {
      self.buckets[bucket_index] = LinkedList::new();
    }

    let bucket = &mut self.buckets[bucket_index];

    bucket.push_back(HashTableItem { key: key.to_string(), value });

    return self;
  }

  pub fn get(&self, key: &str) -> Option<T>
  where
    T: Clone,
  {
    let bucket_index = self.hash(key);
    let bucket = &self.buckets[bucket_index];

    bucket.iter().find(|item| item.key == key).map(|item| item.value.clone())
  }

  pub fn remove(&mut self, key: &str) -> &mut Self
  where
    T: Clone,
  {
    let bucket_index = self.hash(key);
    let bucket = &mut self.buckets[bucket_index];

    if let Some(item_index) = bucket.iter().position(|item| item.key == key) {
      bucket.remove(item_index);
    }

    self
  }
}
