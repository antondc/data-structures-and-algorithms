// You have a two axis chart. Calculate the maximum difference between two successive elements:

pub fn calculate_list_max_items_difference(list: Vec<i32>) -> i32 {
  // Save the max number in an accumulator
  let mut max: i32 = 0;
  let cloned_list: Vec<i32> = list.clone();

  // Iterate list
  for (index, item) in list.into_iter().enumerate() {
    // If we are at the end of the list, return accumulator
    if index + 1 == cloned_list.len() {
      return max;
    }

    // Calculate the difference depending on which number is greater
    let difference = if item > cloned_list[index + 1] {
      item + cloned_list[index + 1]
    } else {
      cloned_list[index + 1] - item
    };

    // Only save value into accumulator if the difference greater
    if difference > max {
      max = difference;
    }
  }

  max
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn calculate_list_max_items_difference_works() {
    let my_list: Vec<i32> = vec![1, 3, 5, 11];
    let difference: i32 = calculate_list_max_items_difference(my_list);

    assert_eq!(difference, 6);
  }
}
