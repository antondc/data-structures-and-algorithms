#[cfg(test)]
mod tests {

  #[test]
  fn clone() {
    let vector: Vec<i32> = vec![1, 2, 3, 4];
    let cloned_vector = vector.clone();

    assert_eq!(cloned_vector, [1, 2, 3, 4]);
  }

  #[test]
  fn sort_by() {
    let vector: Vec<i32> = vec![1, 2, 3, 4];
    let mut cloned_vector = vector.clone();
    cloned_vector.sort_by(|a, b| b.cmp(a));

    assert_eq!(cloned_vector, [4, 3, 2, 1]);
  }

  #[test]
  fn for_loop_and_sum() {
    let vector: Vec<i32> = vec![1, 2, 3, 4];
    let mut number: i32 = 0;
    for (index, item) in vector.into_iter().enumerate() {
      number = number + item + index as i32;
    }

    assert_eq!(number, 16);
  }

  #[test]
  fn filter() {
    let vector: Vec<i32> = vec![1, 2, 3, 4];
    let result: Vec<i32> = vector.into_iter().filter(|&i| i == 1).collect();

    assert_eq!(result, [1]);
  }
}
