import { linearSearch } from "./01_linear_search";

describe("Linear search ", () => {
  const tries = [];
  const array = Array.from({ length: 100 }, (a, item) => item + 1);
  const onStep = (element) => tries.push(element); // Accumulate steps

  afterEach(() => {
    tries.length = 0;
  });

  test("Finds item in array with best case O(1)", () => {
    const target = 1;
    const result = linearSearch(array, target, onStep);

    expect(result).toEqual(1);
    expect(tries.length).toEqual(1);
  });

  test("Finds item in array with worst case O(n)", () => {
    const target = 100;
    const result = linearSearch(array, target, onStep);

    expect(result).toEqual(100);
    expect(tries.length).toEqual(100);
  });
});
