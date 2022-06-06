// An anagram is a rearrangement of letters to form a new word. Given a word and a list of candidates, select the sublist of anagrams of the given word.

// Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".

// The solution is case insensitive, which means "WOrd" is the same as "word" or "woRd". It may help to take a peek at the std library for functions that can convert between them.

// The solution cannot contain the input word. A word is always an anagram of itself, which means it is not an interesting result. Given "hello" and the list ["hello", "olleh"] the answer is ["olleh"].

// Try to limit case changes. Case changes are expensive in terms of time, so it's faster to minimize them.

// If sorting, consider sort_unstable which is typically faster than stable sorting. When applicable, unstable sorting is preferred because it is generally faster than stable sorting and it doesn't allocate auxiliary memory.

fn sort_word(word: &str) -> String {
  let mut input_word_chars: Vec<char> = word.chars().collect();
  input_word_chars.sort_unstable();

  String::from_iter(input_word_chars)
}

pub fn find_anagrams(input_word: String, input_list: Vec<String>) -> Vec<String> {
  let input_word_lowercased = &input_word.to_lowercase();
  let input_word_lowercased_and_sorted = sort_word(input_word_lowercased);

  let result = input_list.into_iter().filter(|curr| {
    let curr_lowercased = &curr.to_lowercase();
    let curr_lowercased_and_sorted = sort_word(curr_lowercased);

    // Evaluate that both strings are identical, and is not the original one
    curr_lowercased_and_sorted == input_word_lowercased_and_sorted
      && (curr_lowercased != input_word_lowercased)
  });

  result.collect::<Vec<String>>()
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn find_anagrams_works_a() {
    let input_word = String::from("Hello");
    let input_list = vec![String::from("OllEh"), String::from("Hello")];
    let intended_output = vec![String::from("OllEh")];

    let result = find_anagrams(input_word, input_list);
    assert_eq!(result, intended_output);
  }

  #[test]
  fn find_anagrams_works_b() {
    let input_word = String::from("listen");
    let input_list = vec![
      String::from("listen"),
      String::from("enlists"),
      String::from("google"),
      String::from("inlets"),
      String::from("banana"),
    ];
    let intended_output = ["inlets"];

    let result = find_anagrams(input_word, input_list);
    assert_eq!(result, intended_output);
  }
}
