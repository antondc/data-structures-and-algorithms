#[cfg(test)]
mod tests {
  use crate::hash_table::hash_table::HashTable;

  use super::super::adjacency_list::{AdjacencyList, Vertex};

  #[test]
  fn adjacency_list_is_instantiated() {
    let graph = AdjacencyList::new();
    let expected = AdjacencyList { graph: HashTable::new(2) };

    assert_eq!(graph, expected);
  }

  #[test]
  fn add_vertex() {
    let mut graph = AdjacencyList::new();
    graph.add_vertex("a");
    let mut hash_table = HashTable::new(2);

    hash_table.set("a", vec![]);
    let expected = AdjacencyList { graph: hash_table };
    assert_eq!(graph, expected);

    graph.add_vertex("a");
    assert_eq!(graph, expected);

    let mut hash_table = HashTable::new(2);
    hash_table.set("a", vec![]).set("b", vec![]);
    let expected = AdjacencyList { graph: hash_table };
    graph.add_vertex("b");

    assert_eq!(graph, expected);
  }

  #[test]
  fn adds_undirected_edge() {
    let mut graph = AdjacencyList::new();
    graph.add_vertex("a").add_vertex("b");
    let _a = graph.add_edge("a", "b", None);

    let mut hash_table = HashTable::new(2);

    hash_table
      .set(
        "a",
        vec![Vertex {
          value: String::from("b"),
          weight: None,
        }],
      )
      .set("b", vec![]);
    let expected = AdjacencyList { graph: hash_table };
    assert_eq!(graph, expected);
  }
}
