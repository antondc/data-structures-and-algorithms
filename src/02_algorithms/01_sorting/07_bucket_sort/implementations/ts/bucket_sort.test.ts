import { bucketSort } from "./bucket_sort";


describe("SelectionSort", () => {
  test("Returns correct result", () => {
    let array = [10, 9, 4, 2, 7, 3, 6, 5, 1, 8];
    const result = bucketSort(array, 5);

    let expected_result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(result).toEqual(expected_result);
  });
  //
  // test("Returns correct result", () => {
  //   let array = [4, 3, 2, 1];
  //   bucketSort(array);
  //   let expected_result = [1, 2, 3, 4];
  //
  //   expect(array).toEqual(expected_result);
  // });
  //
  // test("Returns correct result", () => {
  //   let array = [2, 1, 3];
  //   bucketSort(array);
  //   let expected_result = [1, 2, 3];
  //
  //   expect(array).toEqual(expected_result);
  // });
  //
  // test("Returns correct result", () => {
  //   let array = [3, 2, 1];
  //   bucketSort(array);
  //   let expected_result = [1, 2, 3];
  //
  //   expect(array).toEqual(expected_result);
  // });
});
