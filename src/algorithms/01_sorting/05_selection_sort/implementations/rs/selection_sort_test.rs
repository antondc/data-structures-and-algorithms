#[cfg(test)]
mod tests {
  use super::super::selection_sort::selection_sort;

  #[test]
  fn works_with_already_sorted_arrays() {
    let mut array = vec![1, 2, 3, 4];
    selection_sort(&mut array);
    let expected_result = vec![1, 2, 3, 4];
    assert_eq!(expected_result, array);
  }

  #[test]
  fn works_with_reversed_arrays() {
    let mut array = vec![4, 3, 2, 1];
    selection_sort(&mut array);
    let expected_result = vec![1, 2, 3, 4];
    assert_eq!(expected_result, array);
  }

  #[test]
  fn works_with_simple_unsorted_array() {
    let mut array = vec![2, 1, 3];
    selection_sort(&mut array);
    let expected_result = vec![1, 2, 3];

    assert_eq!(expected_result, array);
  }

  #[test]
  fn works_with_simple_uneven_length_arrays() {
    let mut array = vec![3, 2, 1];
    selection_sort(&mut array);
    let expected_result = vec![1, 2, 3];

    assert_eq!(expected_result, array);
  }
}
