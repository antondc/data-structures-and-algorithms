pub fn range_sum_bst(_input: Option<()>) -> Option<()> {
  None
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn range_sum_first() {
    let input: Option<()> = None;
    let expected_output: Option<()> = None;
    let result = range_sum_bst(input);

    assert_eq!(expected_output, result);
  }
}
