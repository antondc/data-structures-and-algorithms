/*
  Given an unsorted list, sum its biggest n elements
*/

pub fn list_sum_largest_n_numbers(mut list: Vec<i32>, n: i32) -> i32 {
  let mut sum: i32 = 0;
  list.sort_unstable();

  for _i in 1..=n {
    let value_to_sum = list.pop().unwrap();
    sum += value_to_sum;
  }

  sum
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn list_sum_largest_n_numbers_one() {
    let list = vec![17, 310, 32_432, 3, 2, 317, 34, 108_379];
    let n = 3;
    let intended_result = 141_128;
    let result = list_sum_largest_n_numbers(list, n);

    assert_eq!(result, intended_result);
  }
}
