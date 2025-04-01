pub fn bubble_sort(unsorted_array: &Vec<i32>) -> Vec<i32> {
  let mut cloned_array = unsorted_array.clone();

  loop {
    let mut swapped: bool = false;

    for i in 0..cloned_array.len() - 1 {
      if cloned_array[i] > cloned_array[i + 1] {
        cloned_array.swap(i, i + 1);

        swapped = true
      }
    }

    if !swapped {
      break;
    }
  }

  cloned_array
}
