import { bucketSort } from "./bucket_sort";


describe("SelectionSort", () => {
  test("Returns correct result", () => {
    const array = [10, 9, 4, 2, 7, 3, 6, 5, 1, 8];
    const result = bucketSort(array, 5);

    const expected_result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(result).toEqual(expected_result);
  });

  test("Returns correct result", () => {
    const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const result = bucketSort(array, 5);
    const expected_result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(result).toEqual(expected_result);
  });

  test("Throws if negative items are present", () => {
    const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, -1];

    expect(()=> bucketSort(array, 5)).toThrow();
  });
});
