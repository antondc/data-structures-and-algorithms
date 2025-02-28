pub fn insertion_sort(unsorted_array: &Vec<i32>) -> Vec<i32> {
  let mut cloned_array = unsorted_array.clone();

  // Iterate from second item to last
  for i in 1..cloned_array.len() {
    let key = cloned_array[i]; // Value of current key position, start in second element
    let mut j = i;

    while j > 0 && cloned_array[j - 1] > key {
      cloned_array[j] = cloned_array[j - 1]; // Replace second element with first one
      j -= 1; // Decrease counter, so we perform comparison and replace previous element if necessary
    }

    cloned_array[j] = key; // End of outer loop, insert key
  }

  cloned_array
}
