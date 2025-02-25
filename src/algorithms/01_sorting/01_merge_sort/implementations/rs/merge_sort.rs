pub fn merge(mut left: Vec<i32>, mut right: Vec<i32>) -> Vec<i32> {
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

  merge(left_sorted, right_sorted)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn works_with_already_sorted_arrays() {
    let unsorted_array = vec![1, 2];
    let sorted_array = merge_sort(&unsorted_array);
    let expected_result = vec![1, 2];
    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn works_with_simple_unsorted_array() {
    let unsorted_array = vec![2, 1];
    let sorted_array = merge_sort(&unsorted_array);
    let expected_result = vec![1, 2];

    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn works_with_simple_uneven_lenght_arrays() {
    let unsorted_array = vec![2, 1, 3];
    let sorted_array = merge_sort(&unsorted_array);
    let expected_result = vec![1, 2, 3];

    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn it_works_with_already_sorted_arrays() {
    let left = vec![1, 2];
    let right = vec![3, 4];
    let merged = merge(left, right);
    let expected_result = vec![1, 2, 3, 4];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_splits() {
    let left = vec![3, 4];
    let right = vec![1, 2];
    let merged = merge(left, right);
    let expected_result = vec![1, 2, 3, 4];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_uneven_length_lists() {
    let left = vec![3, 4, 5];
    let right = vec![1, 2];
    let merged = merge(left, right);
    let expected_result = vec![1, 2, 3, 4, 5];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_single_item_lists() {
    let left = vec![3];
    let right = vec![1];
    let merged = merge(left, right);
    let expected_result = vec![1, 3];

    assert_eq!(expected_result, merged);
  }
}
