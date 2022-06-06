/*
Write a mistery algorithm that:

1. Receives two numbers, a and b
2. Set a as x and b as y
3. If a > b sets x as a - b
4. If a < b sets b as b - a
6. Repeats 2., 3. and 4.
7. If a == b returns either a or b

*/

pub fn mistery_algorithm(mut a: i128, mut b: i128) -> (i128, i128) {
  match a {
    x if x == b => return (a, b),
    x if x > b => a -= b,
    x if x < b => b -= a,
    _ => (),
  }

  mistery_algorithm(a, b)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn one() {
    let string_capitalized = mistery_algorithm(1635, 1413);

    assert_eq!(string_capitalized, (3, 3));
  }

  #[test]
  fn two() {
    let string_capitalized = mistery_algorithm(1, 1);

    assert_eq!(string_capitalized, (1, 1));
  }
}
