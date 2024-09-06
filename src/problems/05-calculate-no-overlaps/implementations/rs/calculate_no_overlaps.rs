/*
https://helloacm.com/teaching-kids-programming-algorithms-to-check-if-any-intervals-overlapping-meeting-rooms/
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: true
*/

type Intervals = Vec<(i16, i16)>;

pub fn calculate_no_overlaps(intervals: &Intervals) -> bool {
  let mut intervals_cloned = intervals.clone();
  intervals_cloned.sort_by(|a, b| a.1.cmp(&b.0));

  for (index, (a, b)) in intervals_cloned.iter().enumerate() {
    if a > b {
      return false;
    }
    if index + 1 != intervals_cloned.len() && b > &intervals_cloned[index + 1].0 {
      return false;
    }
  }

  true
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn one() {
    let intervals: Intervals = vec![(5, 6), (3, 4), (1, 2)];

    let result = calculate_no_overlaps(&intervals);
    assert!(result);
  }

  #[test]
  fn two() {
    let intervals: Intervals = vec![(0, 30), (5, 10), (15, 20)];

    let result = calculate_no_overlaps(&intervals);
    assert!(!result);
  }

  #[test]
  fn three() {
    let intervals: Intervals = vec![(7, 10), (2, 4)];

    let result = calculate_no_overlaps(&intervals);
    assert!(result);
  }
}
