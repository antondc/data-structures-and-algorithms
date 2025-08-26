#[cfg(test)]
mod tests {
  use super::super::divide_and_conquer::sum_array_items;

  #[test]
  fn disjoint_set_is_instantiated() {
    let array = vec![2, 4, 6];
    let result = sum_array_items(&array);
    let expected = 12;

    assert_eq!(expected, result);
  }
}
