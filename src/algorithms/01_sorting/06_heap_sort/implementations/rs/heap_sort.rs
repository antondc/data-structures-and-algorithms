use crate::heap::heap::{heap, heapify};

pub fn heap_sort(array: &mut Vec<i32>) {
  heap(array);

  for i in (1..array.len()).rev() {
    array.swap(0, i);

    heapify(array, 0, i);
  }
}
