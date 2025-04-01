#[cfg(test)]
mod test {
  use super::super::fizzbuzz::print_controller;

  #[test]
  fn one() {
    let result = print_controller(1);

    assert_eq!(result, "1");
  }

  #[test]
  fn two() {
    let result = print_controller(2);

    assert_eq!(result, "2");
  }

  #[test]
  fn three() {
    let result = print_controller(3);

    assert_eq!(result, "Fizz");
  }

  #[test]
  fn fourth() {
    let result = print_controller(4);

    assert_eq!(result, "4");
  }

  #[test]
  fn fifth() {
    let result = print_controller(5);

    assert_eq!(result, "Buzz");
  }
}
