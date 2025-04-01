#[cfg(test)]
mod test {
  use super::super::array_consecutive_missing_numbers::find_missing_number;

  #[test]
  fn name() {
    let my_list = vec![1, 2, 3, 4, 6];
    let missing_number = find_missing_number(my_list);

    assert_eq!(missing_number, Some(5));
  }
}
