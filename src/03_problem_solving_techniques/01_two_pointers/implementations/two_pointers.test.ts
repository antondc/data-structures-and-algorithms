// Starting with a sorted array of integers, find a pair of numbers that sum to the given target.

import { twoPointers } from "./two_pointers";


describe("SelectionSort", () => {
  test("Returns correct result", () => {
    const array = [1, 3, 4, 6, 8, 10, 13];
    const target = 13;
    const result = twoPointers(array, target);

    const expected_result = [3, 10];

    expect(result).toEqual(expected_result);
  });
});
