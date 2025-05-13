#[cfg(test)]
mod tests {
  use crate::{adjacency_list::adjacency_list::EdgeOptions, hash_table::hash_table::HashTable};

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
    graph.add_vertex("a").add_vertex("b").add_edge("a", "b", None);

    let mut hash_table = HashTable::new(2);

    hash_table
      .set(
        "a",
        vec![Vertex {
          value: String::from("b"),
          weight: None,
        }],
      )
      .set(
        "b",
        vec![Vertex {
          value: String::from("a"),
          weight: None,
        }],
      );
    let expected = AdjacencyList { graph: hash_table };

    assert_eq!(graph, expected);
  }

  #[test]
  fn adds_directed_edge() {
    let mut graph = AdjacencyList::new();
    graph
      .add_vertex("a")
      .add_vertex("b")
      .add_edge("a", "b", Some(EdgeOptions { directed: true, weight: None }));

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

  #[test]
  fn adds_edge_into_empty_graph() {
    let mut graph = AdjacencyList::new();
    graph.add_edge("a", "b", None);

    let hash_table = HashTable::new(2);
    let expected = AdjacencyList { graph: hash_table };

    assert_eq!(graph, expected);
  }

  #[test]
  fn adds_edge_into_graph_missing_vertex_() {
    let mut graph = AdjacencyList::new();
    graph.add_vertex("a").add_edge("a", "b", None);

    let mut hash_table = HashTable::new(2);
    hash_table.set("a", vec![]);
    let expected = AdjacencyList { graph: hash_table };

    assert_eq!(graph, expected);
  }

  #[test]
  fn removes_edge_from_empty_graph() {
    let mut graph = AdjacencyList::new();
    graph.remove_edge("a", "b", None);

    let hash_table = HashTable::new(2);
    let expected = AdjacencyList { graph: hash_table };

    assert_eq!(graph, expected);
  }

  #[test]
  fn removes_edge_from_graph_with_vertices_but_no_edges() {
    let mut graph = AdjacencyList::new();
    graph.add_vertex("a").add_vertex("b").remove_edge("a", "b", None);

    let mut hash_table = HashTable::new(2);
    hash_table.set("a", vec![]).set("b", vec![]);
    let expected = AdjacencyList { graph: hash_table };

    assert_eq!(graph, expected);
  }

  #[test]
  fn removes_edge_from_graph_with_vertices_with_edges() {
    let mut graph = AdjacencyList::new();
    graph.add_vertex("a").add_vertex("b").add_edge("a", "b", None);

    let mut hash_table = HashTable::new(2);
    hash_table
      .set(
        "a",
        vec![Vertex {
          value: String::from("b"),
          weight: None,
        }],
      )
      .set(
        "b",
        vec![Vertex {
          value: String::from("a"),
          weight: None,
        }],
      );
    let expected = AdjacencyList { graph: hash_table };

    assert_eq!(graph, expected);
  }

  #[test]
  fn remove_vertex_from_empty_graph() {
    let mut graph = AdjacencyList::new();
    graph.remove_vertex("a");

    let expected = AdjacencyList { graph: HashTable::new(2) };

    assert_eq!(graph, expected);
  }

  #[test]
  fn remove_vertex_from_graph_with_one_vertex() {
    let mut graph = AdjacencyList::new();
    graph.add_vertex("a").remove_vertex("a");

    let expected = AdjacencyList { graph: HashTable::new(2) };

    assert_eq!(graph, expected);
  }

  #[test]
  fn remove_vertex_from_graph_with_vertices_and_edges() {
    let mut graph = AdjacencyList::new();
    graph.add_vertex("a").add_vertex("b").add_edge("a", "b", None).remove_vertex("a");

    let mut hash_table = HashTable::new(2);
    hash_table.set("b", vec![]);

    let expected = AdjacencyList { graph: hash_table };

    assert_eq!(graph, expected);
  }
}
