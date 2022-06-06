/*
Write a program that takes input of N strings divided by space. It then
outputs those N strings in ascending order.

Constraints:

    0 < Words in Sentence < 50000

Upper case alphabets are considered "smaller" than lower case alphabets.

    Input:
    quick brown Fox

    Output:
    Fox brown quick
*/

pub fn sort_strings(string: String) -> String {
  // Split string in words
  let string_vector = string.split(' ').filter(|a| !a.is_empty());
  // Clone for later use
  let cloned_vector = string_vector.clone();

  // Get vector with capitalized words
  let mut words_capitalized = string_vector
    .filter(|a| a.chars().next().unwrap().is_uppercase())
    .collect::<Vec<&str>>();
  // Sort vector by first letter
  words_capitalized.sort_by_key(|a| a.chars().next().unwrap());

  // Get vector with non capitalized words
  let mut words_non_capitalized = cloned_vector
    .filter(|a| !a.chars().next().unwrap().is_uppercase())
    .collect::<Vec<&str>>();
  // Sort vector by first letter
  words_non_capitalized.sort_by_key(|a| a.chars().next().unwrap());

  words_capitalized.append(&mut words_non_capitalized);

  words_capitalized.join(" ")
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn sort_strings_works() {
    let input = String::from("quick brown Fox");
    let expected_output = String::from("Fox brown quick");
    let result = sort_strings(input);

    assert_eq!(result, expected_output);
  }
}
