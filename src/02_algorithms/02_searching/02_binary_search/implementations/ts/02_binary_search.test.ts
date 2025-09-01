import { binarySearch } from "./02_binary_search";

describe("Linear search ", () => {
  const tries = [];
  const array = Array.from({ length: 100 }, (_, item) => item + 1);

  const onStep = (element) => tries.push(element); // Accumulate steps

  afterEach(() => {
    tries.length = 0;
  });

  test("Finds item in array with best case O(1)", () => {
    const target = 50;
    const result = binarySearch(array, target, onStep);
    expect(result).toEqual(50);
    expect(tries.length).toEqual(1);
  });

  test("Finds item in array with worst case O(log n)", () => {
    const target = 100;

    const result = binarySearch(array, target, onStep);
    expect(result).toEqual(100);
    expect(tries.length).toEqual(7);
  });
});
