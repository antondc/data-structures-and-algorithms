pub fn merge_already_sorted_vecs(mut left: Vec<i32>, mut right: Vec<i32>) -> Vec<i32> {
  let mut sorted_items = vec![];

  while !left.is_empty() && !right.is_empty() {
    if left[0] <= right[0] {
      sorted_items.push(left.remove(0));
    } else {
      sorted_items.push(right.remove(0));
    }
  }

  [sorted_items, left, right].concat()
}

pub fn merge_sort(unsorted_array: &Vec<i32>) -> Vec<i32> {
  if unsorted_array.len() <= 1 {
    // If input has one or none element, it is already sorted
    let sorted_array = unsorted_array.to_vec();

    return sorted_array;
  }

  // Split
  let (left, right) = unsorted_array.split_at(unsorted_array.len() / 2);
  let left_vec = left.to_vec();
  let right_vec = right.to_vec();

  // Sort recursively
  let left_sorted = merge_sort(&left_vec);
  let right_sorted = merge_sort(&right_vec);

  merge_already_sorted_vecs(left_sorted, right_sorted)
}
