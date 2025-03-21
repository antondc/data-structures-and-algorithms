pub fn selection_sort(array: &mut Vec<i32>) {
  for i in 0..array.len() - 1 {
    let mut min_index = i;

    for j in i + 1..array.len() {
      if array[j] < array[min_index] {
        min_index = j
      }
    }

    if min_index != i {
      array.swap(min_index, i);
    }
  }
}
