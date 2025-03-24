import { heapSort } from "./heap_sort";

describe("SelectionSort", () => {
  test.skip("Returns correct result", async () => {
    let array = [1, 2, 3, 4];
    heapSort(array);
    let expected_result = [1, 2, 3, 4];

    expect(array).toEqual(expected_result);
  });

  test.skip("Returns correct result", async () => {
    let array = [4, 3, 2, 1];
    heapSort(array);
    let expected_result = [1, 2, 3, 4];

    expect(array).toEqual(expected_result);
  });

  test.skip("Returns correct result", async () => {
    let array = [2, 1, 3];
    heapSort(array);
    let expected_result = [1, 2, 3];

    expect(array).toEqual(expected_result);
  });

  test.skip("Returns correct result", async () => {
    let array = [3, 2, 1];
    heapSort(array);
    let expected_result = [1, 2, 3];

    expect(array).toEqual(expected_result);
  });
});
