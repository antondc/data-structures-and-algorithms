// Given an array with consecutive numbers from 1 to n, but where you know that a number is missing, calculate which number is not in the array

pub fn find_missing_number(list: Vec<i32>) -> Option<i32> {
  let cloned_list = list.clone();

  for (index, item) in list.into_iter().enumerate() {
    // If we are at the end of the list, return None
    if index + 1 == cloned_list.len() {
      return None;
    }

    // If current item is not equal to next item plus one, return missing item
    if item + 1 != cloned_list[index + 1] {
      return Some(item + 1);
    }
  }

  // Base case, return None
  None
}

#[cfg(test)]
mod test {
  use super::*;
  #[test]
  fn name() {
    let my_list = vec![1, 2, 3, 4, 6];
    let missing_number = find_missing_number(my_list);

    assert_eq!(missing_number, Some(5));
  }
}
