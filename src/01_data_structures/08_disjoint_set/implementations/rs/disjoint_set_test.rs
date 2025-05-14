#[cfg(test)]
mod tests {
  use super::super::disjoint_set::DisjointSet;

  #[test]
  fn disjoint_set_is_instantiated() {
    let disjoint_set = DisjointSet::new(3);

    let expected = DisjointSet {
      representatives: vec![0, 1, 2],
      ranks: vec![0, 0, 0],
    };
    assert_eq!(disjoint_set, expected);
  }
}
