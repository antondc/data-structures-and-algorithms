pub const OUT_OF_BOUNDS_ERROR: &str = "Index out of bounds";

#[derive(Debug, PartialEq)]
pub struct DisjointSet {
  pub representatives: Vec<usize>,
  pub ranks: Vec<usize>,
}

impl DisjointSet {
  pub fn new(size: usize) -> DisjointSet {
    let representatives: Vec<usize> = (0..size).collect();
    let ranks: Vec<usize> = vec![0; size as usize];

    DisjointSet { representatives, ranks }
  }

  pub fn find(&mut self, index: usize) -> Result<usize, &str> {
    if index > self.representatives.len() {
      return Err(OUT_OF_BOUNDS_ERROR);
    }

    if index != self.representatives[index] {
      self.representatives[index] = self.find(index).unwrap();
      return Ok(self.representatives[index]);
    }

    return Ok(self.representatives[index]);
  }
}
