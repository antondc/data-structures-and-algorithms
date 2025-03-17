pub fn insertion_sort(array: &mut Vec<i32>) {
  // Iterate from second item to last
  for i in 1..array.len() {
    let key = array[i]; // Value of current key position, start in second element
    let mut j = i;

    while j > 0 && array[j - 1] > key {
      array[j] = array[j - 1]; // Replace second element with first one
      j -= 1; // Decrease counter, so we perform comparison and replace previous element if necessary
    }

    array[j] = key; // End of outer loop, insert key
  }
}
