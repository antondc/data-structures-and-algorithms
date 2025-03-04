pub fn quick_sort(unsorted_array: Vec<i32>) -> Vec<i32> {
  let cloned_array = unsorted_array.clone();

  if unsorted_array.len() <= 1 {
    return unsorted_array;
  }

  let (pivot_index, partitioned_array) = partition(cloned_array);
  let left_array = quick_sort(partitioned_array[..pivot_index].to_owned());
  let right_array = quick_sort(partitioned_array[pivot_index..].to_owned());

  [left_array, right_array].concat()
}

pub fn partition(unpartitioned_array: Vec<i32>) -> (usize, Vec<i32>) {
  let mut cloned_array = unpartitioned_array.clone();
  let mut i = 0;

  let right = cloned_array.len() - 1;

  for j in 0..right {
    if cloned_array[j] <= cloned_array[right] {
      cloned_array.swap(j, i);
      i += 1;
    }
  }

  cloned_array.swap(i, right);

  (i, cloned_array)
}
