// Given an array arr[] and an integer k, we need to calculate the maximum sum of a subarray having size exactly k.
// Input  : arr[] = [5, 2, -1, 0, 3], k = 3
// Output : 6
// Explanation : We get maximum sum by considering the subarray [5, 2 , -1]
//
// Input  : arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
// Output : 39
// Explanation : We get maximum sum by adding subarray [4, 2, 10, 23] of size 4

import { slidingWindow } from "./sliding_window";


describe("Sliding Window", () => {
  test("Returns correct result", () => {
    const array = [5, 2, -1, 0, 3];
    const size = 3;
    const result = slidingWindow(array, size);

    const expected_result = 6;

    expect(result).toEqual(expected_result);
  });

  test("Returns correct result", () => {
    const array = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const size = 4;
    const result = slidingWindow(array, size);

    const expected_result = 39;

    expect(result).toEqual(expected_result);
  });
});
