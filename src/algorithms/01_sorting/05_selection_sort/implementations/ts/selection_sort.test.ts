import { selection_sort } from "./selection_sort";

describe("SelectionSort", () => {
  test("Returns correct result", async () => {
    let array = [1, 2, 3, 4];
    selection_sort(array);
    let expected_result = [1, 2, 3, 4];

    expect(array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let array = [4, 3, 2, 1];
    selection_sort(array);
    let expected_result = [1, 2, 3, 4];

    expect(array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let array = [2, 1, 3];
    selection_sort(array);
    let expected_result = [1, 2, 3];

    expect(array).toEqual(expected_result);
  });

  test("Returns correct result", async () => {
    let array = [3, 2, 1];
    selection_sort(array);
    let expected_result = [1, 2, 3];

    expect(array).toEqual(expected_result);
  });
});
