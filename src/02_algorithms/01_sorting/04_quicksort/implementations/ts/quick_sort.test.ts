import { quick_sort, partition } from "./quick_sort";

describe("QuickSort", () => {
  test("Returns correct result", async () => {
    let array = [1, 2, 3, 4];
    quick_sort(array);
    let expected_result = [1, 2, 3, 4];
    expect(array).toEqual(expected_result);
  });
  test("Returns correct result", async () => {
    let array = [2, 1];
    quick_sort(array);
    let expected_result = [1, 2];
    expect(array).toEqual(expected_result);
  });
  test("Returns correct result", async () => {
    let array = [2, 1, 3];
    quick_sort(array);
    let expected_result = [1, 2, 3];
    expect(array).toEqual(expected_result);
  });
  test("Returns correct result", async () => {
    let array = [3, 2, 1];
    quick_sort(array);
    let expected_result = [1, 2, 3];
    expect(array).toEqual(expected_result);
  });
  test("Returns correct result", async () => {
    let array = [5, 4, 3, 2, 1];
    quick_sort(array);
    let expected_result = [1, 2, 3, 4, 5];
    expect(array).toEqual(expected_result);
  });
  test("Returns correct result", async () => {
    let array = [8, 1, 4, 5, 2, 6];
    quick_sort(array);
    let expected_result = [1, 2, 4, 5, 6, 8];
    expect(array).toEqual(expected_result);
  });
  test("Partitions an array", async () => {
    let array = [8, 1, 4, 5, 2, 6];
    let pivotIndex = partition(array, 0, array.length - 1);
    expect(pivotIndex).toEqual(4);
    expect(array).toEqual([1, 4, 5, 2, 6, 8]);
  });
});
