pub fn sum_array_items(array: &Vec<i32>) -> i32 {
  if array.len() == 1 {
    return array[0];
  }

  let head = array[0];
  let tail = &array[1..].to_vec();

  return head + sum_array_items(tail);
}
