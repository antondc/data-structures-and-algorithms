/*
Write a program that takes input of a list of integers in the first line, and then a list of intergers of every new line. For each of the integers (from line 2 onwards), the program outputs true, if that number was present in the first line, and False otherwise.

  Input:
      99 12 10 23
      23
      25
      99

  Output:
      True
      False
      True
*/

pub fn linear_searching(string: String) -> String {
  // Get first line
  let first_line = string.split('\n').next().unwrap();
  let first_line_length = first_line.len();

  // Remove first line from input
  let mut string_replaced = string.clone();
  string_replaced.replace_range(0..first_line_length, "");
  let mut output: Vec<&str> = vec![];

  // Create a vector with the rest of strings to compare
  let strings_to_compare = string_replaced
    .split('\n')
    .filter(|a| !a.is_empty())
    .collect::<Vec<&str>>();

  // Compare
  for i in strings_to_compare {
    match first_line.contains(i) {
      true => output.push("True"),
      false => output.push("False"),
    }
  }

  output.join("\n")
}

#[cfg(test)]

mod tests {
  use super::*;

  #[test]
  fn linear_searching_works() {
    let input = "99 12 10 23\n23\n25\n99".to_owned();
    let expected_result = "True\nFalse\nTrue";
    let result = linear_searching(input);

    assert_eq!(result, expected_result);
  }
}
