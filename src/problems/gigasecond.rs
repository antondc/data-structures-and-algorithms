// Given a moment, determine the moment that would be after a gigasecond has passed.
// A gigasecond is 10^9 (1,000,000,000) seconds.
// If you're unsure what operations you can perform on PrimitiveDateTime take a look at the time crate which is listed as a dependency in the Cargo.toml file for this exercise.

#[allow(unused_imports)]
use time::{
  ext::NumericalDuration,
  macros::{date, time},
  Duration, PrimitiveDateTime,
};

pub fn calculate_date_one(date_time: PrimitiveDateTime) -> PrimitiveDateTime {
  date_time + 1e9.seconds()
}

pub fn calculate_date_two(date_time: PrimitiveDateTime) -> PrimitiveDateTime {
  let gigaseconds = Duration::seconds(1_000_000_000);

  date_time + gigaseconds
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn one() {
    let itended_result = PrimitiveDateTime::new(date!(2050 - 09 - 09), time!(11:47:40));
    let primitive_datetime = PrimitiveDateTime::new(date!(2019 - 01 - 01), time!(10:01));
    let calculated_date = calculate_date_one(primitive_datetime);

    assert_eq!(calculated_date, itended_result);
  }

  #[test]
  fn two() {
    let itended_result = PrimitiveDateTime::new(date!(2050 - 09 - 09), time!(11:47:40));
    let primitive_datetime = PrimitiveDateTime::new(date!(2019 - 01 - 01), time!(10:01));
    let calculated_date = calculate_date_two(primitive_datetime);

    assert_eq!(calculated_date, itended_result);
  }
}
