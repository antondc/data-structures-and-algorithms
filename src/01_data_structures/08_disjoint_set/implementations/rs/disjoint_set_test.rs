#[cfg(test)]
mod tests {
  use super::super::disjoint_set::{DisjointSet, OUT_OF_BOUNDS_ERROR};

  #[test]
  fn disjoint_set_is_instantiated() {
    let disjoint_set = DisjointSet::new(3);

    let expected = DisjointSet {
      representatives: vec![0, 1, 2],
      ranks: vec![0, 0, 0],
    };
    assert_eq!(disjoint_set, expected);
  }

  #[test]
  fn finds_item_in_set() {
    let mut disjoint_set = DisjointSet::new(3);

    let expected = disjoint_set.find(1);

    assert_eq!(expected, Ok(1));
  }

  #[test]
  fn trows_if_item_out_of_bounds() {
    let mut disjoint_set = DisjointSet::new(3);

    let expected = disjoint_set.find(4);

    assert_eq!(expected, Err(OUT_OF_BOUNDS_ERROR));
  }
}
