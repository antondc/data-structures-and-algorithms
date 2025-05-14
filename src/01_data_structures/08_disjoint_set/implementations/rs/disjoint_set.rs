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

  pub fn union(&mut self, a: usize, b: usize) -> Result<&mut Self, &str> {
    if a >= self.representatives.len() || b >= self.representatives.len() {
      return Err(OUT_OF_BOUNDS_ERROR);
    }

    let representative_a = if let Ok(representative) = self.find(a) {
      representative
    } else {
      return Err(OUT_OF_BOUNDS_ERROR);
    };

    let representative_b = if let Ok(representative) = self.find(b) {
      representative
    } else {
      return Err(OUT_OF_BOUNDS_ERROR);
    };

    if representative_a == representative_b {
      return Ok(self);
    }

    if self.ranks[representative_a] < self.ranks[representative_b] {
      self.representatives[representative_a] = representative_b;
    } else if self.ranks[representative_a] > self.ranks[representative_b] {
      self.representatives[representative_b] = representative_a;
    } else {
      self.representatives[representative_b] = representative_a;
      self.ranks[representative_a] = self.ranks[representative_a] + 1
    }

    return Ok(self);
  }
}
