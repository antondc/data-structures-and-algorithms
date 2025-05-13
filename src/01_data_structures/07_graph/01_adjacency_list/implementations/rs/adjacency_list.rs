use crate::hash_table::hash_table::HashTable;

#[derive(Debug, PartialEq)]
pub struct EdgeOptions {
  pub directed: bool,
  pub weight: Option<i32>,
}

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

  pub fn add_edge(&mut self, u: &str, v: &str, options: Option<EdgeOptions>) -> &mut AdjacencyList {
    if !self.graph.has(u) || !self.graph.has(v) {
      return self;
    }
    let unwrapped_options = options.unwrap_or(EdgeOptions { directed: false, weight: None });

    if let Some(neighbors) = self.graph.get_mut(u) {
      neighbors.push(Vertex {
        value: v.to_string(),
        weight: unwrapped_options.weight,
      });
    }

    if unwrapped_options.directed {
      if let Some(neighbors) = self.graph.get_mut(v) {
        neighbors.push(Vertex {
          value: u.to_string(),
          weight: unwrapped_options.weight,
        });
      }
    }

    self
  }
}
