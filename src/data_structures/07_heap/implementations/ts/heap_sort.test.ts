import { buildMaxHeap, heapify } from "./heap_sort";

describe("HeapSort", () => {
  test("heapify first non-leaf node", async () => {
    //          3
    //        /  \
    //       5    1←
    //      / \  / swap
    //     4  2 10
    const array = [3, 5, 1, 4, 2, 10];
    heapify(array, 2, array.length);

    expect(array).toEqual([3, 5, 10, 4, 2, 1]);
  });
  test("heapify second non-leaf node, no changes", async () => {
    //          3
    //        /  \
    //       5←  10
    //   ok / \  /
    //     4  2  1

    const array = [3, 5, 10, 4, 2, 1];
    heapify(array, 1, array.length);

    expect(array).toEqual([3, 5, 10, 4, 2, 1]);
  });
  test("heapify third non-leaf node", async () => {
    //         10←
    //        /  \ swap
    //       5    3
    //      / \  /
    //     4  2  1
    const array = [3, 5, 10, 4, 2, 1];
    heapify(array, 0, array.length);

    expect(array).toEqual([10, 5, 3, 4, 2, 1]);
  });
  test("Returns correct result", async () => {
    const array = [3, 5, 1, 4, 2, 10];
    buildMaxHeap(array);

    expect(array).toEqual([10, 5, 3, 4, 2, 1]);
  });
  test("Returns correct result", async () => {
    const array = [3, 5, 1, 4, 2];
    buildMaxHeap(array);

    expect(array).toEqual([5, 4, 1, 3, 2]);
  });

  // test("Returns correct result", async () => {
  //   let array = [1, 2, 3, 4];
  //   heap_sort(array);
  //   let expected_result = [1, 2, 3, 4];

  //   expect(array).toEqual(expected_result);
  // });

  // test("Returns correct result", async () => {
  //   let array = [4, 3, 2, 1];
  //   heap_sort(array);
  //   let expected_result = [1, 2, 3, 4];

  //   expect(array).toEqual(expected_result);
  // });

  // test("Returns correct result", async () => {
  //   let array = [2, 1, 3];
  //   heap_sort(array);
  //   let expected_result = [1, 2, 3];

  //   expect(array).toEqual(expected_result);
  // });

  // test("Returns correct result", async () => {
  //   let array = [3, 2, 1];
  //   heap_sort(array);
  //   let expected_result = [1, 2, 3];

  //   expect(array).toEqual(expected_result);
  // });
});
