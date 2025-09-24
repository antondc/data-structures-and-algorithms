import { binarySearch } from "./02_binary_search";

describe("Binary Search ", () => {
  const array = Array.from({ length: 100 }, (_, item) => item + 1);

  test("Finds item in array with best case O(1)", () => {
    const target = 50;
    const result = binarySearch(array, target);
    expect(result).toEqual(50);
  });

  test("Finds item in array with worst case O(log n)", () => {
    const target = 100;

    const result = binarySearch(array, target);
    expect(result).toEqual(100);
  });
});
