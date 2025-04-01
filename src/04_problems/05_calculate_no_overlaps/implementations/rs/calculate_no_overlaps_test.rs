#[cfg(test)]
mod tests {
  use super::super::calculate_no_overlaps::calculate_no_overlaps;

  #[test]
  fn one() {
    let intervals: crate::calculate_no_overlaps::calculate_no_overlaps::Intervals = vec![(5, 6), (3, 4), (1, 2)];

    let result = calculate_no_overlaps(&intervals);
    assert!(result);
  }

  #[test]
  fn two() {
    let intervals: crate::calculate_no_overlaps::calculate_no_overlaps::Intervals = vec![(0, 30), (5, 10), (15, 20)];

    let result = calculate_no_overlaps(&intervals);
    assert!(!result);
  }

  #[test]
  fn three() {
    let intervals: crate::calculate_no_overlaps::calculate_no_overlaps::Intervals = vec![(7, 10), (2, 4)];

    let result = calculate_no_overlaps(&intervals);
    assert!(result);
  }
}
