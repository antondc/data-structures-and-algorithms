import { merge_already_sorted_arrays, merge_sort } from "./01-merge-sort";

describe("FizzBuzz", () => {
  test("Returns correct result", async () => {
    let unsorted_array = [1, 2];
    let sorted_array = merge_sort(unsorted_array);
    let expected_result = [1, 2];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [2, 1];
    let sorted_array = merge_sort(unsorted_array);
    let expected_result = [1, 2];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [2, 1, 3];
    let sorted_array = merge_sort(unsorted_array);
    let expected_result = [1, 2, 3];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let left = [1, 2];
    let right = [3, 4];
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = [1, 2, 3, 4];

    expect(merged).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let left = [3, 4];
    let right = [1, 2];
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = [1, 2, 3, 4];

    expect(merged).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let left = [3, 4, 5];
    let right = [1, 2];
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = [1, 2, 3, 4, 5];

    expect(merged).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let left = [3];
    let right = [1];
    let merged = merge_already_sorted_arrays(left, right);
    let expected_result = [1, 3];

    expect(merged).toEqual(expected_result);
  });
});
