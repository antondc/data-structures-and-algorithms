#[cfg(test)]
mod tests {
  use super::super::insertion_sort::insertion_sort;

  #[test]
  fn works_with_already_sorted_arrays() {
    let unsorted_array = vec![1, 2, 3, 4];
    let sorted_array = insertion_sort(&unsorted_array);
    let expected_result = vec![1, 2, 3, 4];
    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn works_with_reversed_arrays() {
    let unsorted_array = vec![4, 3, 2, 1];
    let sorted_array = insertion_sort(&unsorted_array);
    let expected_result = vec![1, 2, 3, 4];
    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn works_with_simple_unsorted_array() {
    let unsorted_array = vec![2, 1, 3];
    let sorted_array = insertion_sort(&unsorted_array);
    let expected_result = vec![1, 2, 3];

    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn works_with_simple_uneven_length_arrays() {
    let unsorted_array = vec![3, 2, 1];
    let sorted_array = insertion_sort(&unsorted_array);
    let expected_result = vec![1, 2, 3];

    assert_eq!(expected_result, sorted_array);
  }
}
