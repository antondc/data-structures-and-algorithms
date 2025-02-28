import { insertion_sort } from "./insertion_sort";

describe("InsertionSort", () => {
  test("Returns correct result", async () => {
    let unsorted_array = [1, 2, 3, 4];
    let sorted_array = insertion_sort(unsorted_array);
    let expected_result = [1, 2, 3, 4];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [4, 3, 2, 1];
    let sorted_array = insertion_sort(unsorted_array);
    let expected_result = [1, 2, 3, 4];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [2, 1, 3];
    let sorted_array = insertion_sort(unsorted_array);
    let expected_result = [1, 2, 3];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [3, 2, 1];
    let sorted_array = insertion_sort(unsorted_array);
    let expected_result = [1, 2, 3];

    expect(sorted_array).toEqual(expected_result);
  });
});
