import { quick_sort, partition } from "./quick_sort";

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

  test("Returns correct result", async () => {
    let unsorted_array = [5, 4, 3, 2, 1];
    let sorted_array = quick_sort(unsorted_array, 0, unsorted_array.length - 1);
    let expected_result = [1, 2, 3, 4, 5];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let unsorted_array = [8, 1, 4, 5, 2, 6];
    let sorted_array = quick_sort(unsorted_array, 0, unsorted_array.length - 1);
    let expected_result = [1, 2, 4, 5, 6, 8];

    expect(sorted_array).toEqual(expected_result);
  });

  test("Partitions an array", async () => {
    let unsorted_array = [5, 4, 2, 1, 3];
    let result = partition(unsorted_array, 0, unsorted_array.length - 1);
    let expected_result = { partitionedArray: [2, 1, 3, 4, 5], pivotIndex: 2 };

    expect(result).toEqual(expected_result);
  });
});
