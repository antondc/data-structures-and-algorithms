pub fn string_reverse_one(string: String) -> String {
  string.chars().rev().collect()
}

pub fn string_reverse_two(mut string: String) -> String {
  if string.is_empty() {
    string
  } else {
    let removed_char = string.remove(0);
    let mut string = string_reverse_two(string);
    string.push(removed_char);

    string
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn string_reverse_one_works() {
    let string = String::from("1234");
    let reversed_string = string_reverse_one(string);

    assert_eq!(reversed_string, "4321");
  }

  #[test]
  fn string_reverse_two_works() {
    let string = String::from("1234");
    let reversed_string = string_reverse_one(string);

    assert_eq!(reversed_string, "4321");
  }
}
