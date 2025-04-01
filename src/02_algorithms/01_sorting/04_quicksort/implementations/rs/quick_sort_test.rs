#[cfg(test)]
mod tests {
  use super::super::quick_sort::{partition, quick_sort};

  #[test]
  fn partitions_an_array_correctly() {
    let mut unsorted_array = vec![5, 4, 2, 1, 3];
    let result = partition(&mut unsorted_array);
    let expected_result = 2;

    assert_eq!(expected_result, result);
  }

  #[test]
  fn works_with_already_sorted_arrays() {
   let mut array = vec![1, 2, 3, 4];
    quick_sort(&mut array);
   let expected_result = vec![1, 2, 3, 4];
   assert_eq!(expected_result, array);
  }

  #[test]
  fn works_with_reversed_arrays() {
   let mut array = vec![4, 3, 2, 1];
    quick_sort(&mut array);
   let expected_result = vec![1, 2, 3, 4];
   assert_eq!(expected_result, array);
  }

  #[test]
  fn works_with_simple_unsorted_array() {
   let mut array = vec![2, 1, 3];
    quick_sort(&mut array);
   let expected_result = vec![1, 2, 3];

   assert_eq!(expected_result, array);
  }

  #[test]
  fn works_with_simple_uneven_length_arrays() {
   let mut array = vec![3, 2, 1];
  quick_sort(&mut array);
   let expected_result = vec![1, 2, 3];

   assert_eq!(expected_result, array);
  }
}
