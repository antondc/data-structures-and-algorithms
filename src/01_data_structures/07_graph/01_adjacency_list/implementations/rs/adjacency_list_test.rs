#[cfg(test)]
mod tests {
  use super::super::adjacency_list::AdjacencyList;

  #[test]
  fn adjacency_list_is_instantiated() {
    let trie = AdjacencyList::new();

    assert_eq!(trie, AdjacencyList {});
  }
}
