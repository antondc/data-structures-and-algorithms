import { heap_sort } from "./heap_sort";

describe("HeapSort", () => {
  test("Returns correct result", async () => {
    let array = [1, 2, 3, 4];
    heap_sort(array);
    let expected_result = [1, 2, 3, 4];

    expect(array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let array = [4, 3, 2, 1];
    heap_sort(array);
    let expected_result = [1, 2, 3, 4];

    expect(array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let array = [2, 1, 3];
    heap_sort(array);
    let expected_result = [1, 2, 3];

    expect(array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let array = [3, 2, 1];
    heap_sort(array);
    let expected_result = [1, 2, 3];

    expect(array).toEqual(expected_result);
  });
});
