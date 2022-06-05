pub fn print_controller(index: i32) -> String {
  match (index % 3, index % 5) {
    (0, 0) => String::from("FizzBuzz"),
    (0, _) => String::from("Fizz"),
    (_, 0) => String::from("Buzz"),
    (_, _) => index.to_string(),
  }
}

pub fn execute_fizzbuzz() {
  for i in 1..5 {
    print_controller(i);
  }
}

#[cfg(test)]
mod test {
  use super::*;

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
