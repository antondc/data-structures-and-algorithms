pub fn merge_already_sorted_arrays(left: Vec<i32>, right: Vec<i32>) -> Vec<i32> {
  let left_length = left.len();
  let right_length = right.len();

  // Final array will be the size of both provided arrays
  let mut sorted_items = vec![0; left_length + right_length];

  let mut i = 0;
  let mut j = 0;

  // Iterate over the array that we will fill with items either in left or right arrays
  for k in 0..sorted_items.len() {
    // If neither "i" and "j" pointers did reach the limit of their respective arrays
    if i + 1 <= left.len() && j + 1 <= right.len() {
      // Decide between current item in left array and current item in right array which one will be next in final array
      if left[i] <= right[j] {
        sorted_items[k] = left[i];

        i = i + 1;
      } else if left[i] > right[j] {
        sorted_items[k] = right[j];
        j = j + 1;
      }
    } else if i + 1 <= left.len() {
      // If only "i" pointer didnt reach the limit —but "j" did—
      sorted_items[k] = left[i];

      i = i + 1;
    } else if j + 1 <= right.len() {
      // If only "j" pointer didnt reach the limit —but "i" did—
      sorted_items[k] = right[j];

      j = j + 1;
    }
  }

  sorted_items
}

pub fn merge_sort(unsorted_array: &Vec<i32>) -> Vec<i32> {
  let n = unsorted_array.len();
  if n <= 1 {
    // Base case: if input has length of one it is already sorted, return it
    let sorted_array = unsorted_array.to_vec();

    sorted_array
  } else {
    // If input has length bigger than two, then:println!
    // 1. Split it
    let (left, right) = unsorted_array.split_at(n / 2);
    let left_vec = left.to_vec();
    let right_vec = right.to_vec();

    // 2. Sort it recursively
    let left_sorted = merge_sort(&left_vec);
    let right_sorted = merge_sort(&right_vec);

    let sorted_array_1 = merge_already_sorted_arrays(left_sorted, right_sorted);

    sorted_array_1
  }
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
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = vec![1, 2, 3, 4];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_splits() {
    let left = vec![3, 4];
    let right = vec![1, 2];
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = vec![1, 2, 3, 4];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_uneven_length_lists() {
    let left = vec![3, 4, 5];
    let right = vec![1, 2];
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = vec![1, 2, 3, 4, 5];

    assert_eq!(expected_result, merged);
  }

  #[test]
  fn it_works_with_single_item_lists() {
    let left = vec![3];
    let right = vec![1];
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = vec![1, 3];

    assert_eq!(expected_result, merged);
  }
}
