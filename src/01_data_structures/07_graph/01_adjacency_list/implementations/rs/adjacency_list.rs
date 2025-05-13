use crate::hash_table::hash_table::HashTable;

#[derive(Debug, PartialEq)]
pub struct Vertex {
  pub value: String,
  pub weight: Option<i32>,
}

#[derive(Debug, PartialEq)]
pub struct AdjacencyList {
  pub graph: HashTable<Vec<Vertex>>,
}

impl AdjacencyList {
  pub fn new() -> AdjacencyList {
    return AdjacencyList { graph: HashTable::new(2) };
  }

  pub fn add_vertex(&mut self, u: &str) -> &mut AdjacencyList {
    if self.graph.has(u) {
      return self;
    }

    self.graph.set(u, vec![]);

    return self;
  }
}
