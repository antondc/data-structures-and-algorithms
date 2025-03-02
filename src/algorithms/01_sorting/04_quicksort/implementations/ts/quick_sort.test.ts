import { quick_sort } from "./quick_sort";

describe("QuickSort", () => {
  test("Returns correct result", async () => {
    let unsorted_array = [1, 2, 3, 4];
    let sorted_array = quick_sort(unsorted_array, 0, unsorted_array.length - 1);
    let expected_result = [1, 2, 3, 4];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [2, 1];
    let sorted_array = quick_sort(unsorted_array, 0, unsorted_array.length - 1);
    let expected_result = [1, 2];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [2, 1, 3];
    let sorted_array = quick_sort(unsorted_array, 0, unsorted_array.length - 1);
    let expected_result = [1, 2, 3];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [3, 2, 1];
    let sorted_array = quick_sort(unsorted_array, 0, unsorted_array.length - 1);
    let expected_result = [1, 2, 3];

    expect(sorted_array).toEqual(expected_result);
  });
});
