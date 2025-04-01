#[cfg(test)]
mod tests {
  use super::super::bubble_sort::bubble_sort;

  #[test]
  fn works_with_already_sorted_arrays() {
    let unsorted_array = vec![1, 2];
    let sorted_array = bubble_sort(&unsorted_array);
    let expected_result = vec![1, 2];
    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn works_with_simple_unsorted_array() {
    let unsorted_array = vec![2, 1];
    let sorted_array = bubble_sort(&unsorted_array);
    let expected_result = vec![1, 2];

    assert_eq!(expected_result, sorted_array);
  }

  #[test]
  fn works_with_simple_uneven_length_arrays() {
    let unsorted_array = vec![2, 1, 3];
    let sorted_array = bubble_sort(&unsorted_array);
    let expected_result = vec![1, 2, 3];

    assert_eq!(expected_result, sorted_array);
  }
}
