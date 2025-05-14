#[derive(Debug, PartialEq)]
pub struct DisjointSet {
  pub representatives: Vec<u32>,
  pub ranks: Vec<u32>,
}

impl DisjointSet {
  pub fn new(size: u32) -> DisjointSet {
    let representatives: Vec<u32> = (0..size).collect();
    let ranks: Vec<u32> = vec![0; size as usize];

    DisjointSet { representatives, ranks }
  }
}
