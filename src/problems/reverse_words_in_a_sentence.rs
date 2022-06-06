/*
Write a program that takes input of a number N, then takes N lines of input sentences. For each sentence it reverses each word. The order of each word is NOT reversed.

0 < Max Number of Inputs <= 100
0 < Number of Words in one input < 100
0 < Length of Word in a sentence < 20

Your output lines should not have any trailing or leading.

  Input
    3
    Remotelo is awesome
    Candidates give interview
    best candidates are selected

  Output:
    oletomeR si emosewa
    setadidnaC evig weivretni
    tseb setadidnac era detceles

*/

pub fn reverse_words_in_a_sentence(_number: i32, lines: String) -> String {
  // Not clear the need of `_number`

  lines
    .split('\n') // Create a vector with the lines splitting by breaklines
    .filter(|a| !a.is_empty()) // Clean empty elements
    .into_iter()
    .map(|phrase| {
      // For every phrase
      phrase
        .split(' ') // Split to a vector in words
        .map(|word| word.chars().rev().collect()) // For every word, reverse it
        .collect::<Vec<String>>()
        .join(" ") // Restore the phrase
    })
    .collect::<Vec<String>>()
    .join("\n") // Restore the breaklines
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn reverse_words_in_a_sentence_works() {
    let number = 3;
    let lines =
      String::from("Remotelo is awesome\nCandidates give interview\nbest candidates are selected");
    let expected_output =
      String::from("oletomeR si emosewa\nsetadidnaC evig weivretni\ntseb setadidnac era detceles");
    let result = reverse_words_in_a_sentence(number, lines);

    assert_eq!(result, expected_output);
  }
}
