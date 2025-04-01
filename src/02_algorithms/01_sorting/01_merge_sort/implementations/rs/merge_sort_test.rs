#[cfg(test)]
mod tests {
  use super::super::merge_sort::{merge_already_sorted_vecs, merge_sort};

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
  fn works_with_simple_uneven_length_arrays() {
    let unsorted_array = vec![2, 1, 3];
    let sorted_array = merge_sort(&unsorted_array);
    let expected_result = vec![1, 2, 3];

    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn it_works_with_already_sorted_arrays() {
    let left = vec![1, 2];
    let right = vec![3, 4];
    let merged = merge_already_sorted_vecs(left, right);
    let expected_result = vec![1, 2, 3, 4];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_splits() {
    let left = vec![3, 4];
    let right = vec![1, 2];
    let merged = merge_already_sorted_vecs(left, right);
    let expected_result = vec![1, 2, 3, 4];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_uneven_length_lists() {
    let left = vec![3, 4, 5];
    let right = vec![1, 2];
    let merged = merge_already_sorted_vecs(left, right);
    let expected_result = vec![1, 2, 3, 4, 5];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_single_item_lists() {
    let left = vec![3];
    let right = vec![1];
    let merged = merge_already_sorted_vecs(left, right);
    let expected_result = vec![1, 3];

    assert_eq!(expected_result, merged);
  }
}
