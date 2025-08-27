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

  #[test]
  fn unions_groups_of_given_representatives() {
    let mut disjoint_set = DisjointSet::new(3);
    let result = disjoint_set.union(1, 2).unwrap();

    let expected = &DisjointSet {
      representatives: vec![0, 1, 1],
      ranks: vec![0, 1, 0],
    };

    assert_eq!(result, expected);
  }

  #[test]
  fn union_throws_if_representative_out_of_bound() {
    let mut disjoint_set = DisjointSet::new(3);
    let result = disjoint_set.union(1, 4);

    let expected = Err(OUT_OF_BOUNDS_ERROR);

    assert_eq!(result, expected);
  }

  #[test]
  fn connected_returns_if_two_items_connected() {
    let mut disjoint_set = DisjointSet::new(3);
    let _ = disjoint_set.union(1, 2);
    let connected = disjoint_set.connected(1, 2);

    assert_eq!(connected, Ok(true));
  }

  #[test]
  fn returns_error_if_item_out_of_bounds() {
    let mut disjoint_set = DisjointSet::new(3);
    let _ = disjoint_set.union(1, 2);
    let connected = disjoint_set.connected(1, 4);
    let expected = Err(OUT_OF_BOUNDS_ERROR);

    assert_eq!(connected, expected);
  }
}
