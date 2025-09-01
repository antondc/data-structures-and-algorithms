import { linearSearch } from "./01_linear_search";

describe("Linear search ", () => {
  const tries = [];
  const array = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];
  const comparatorFactory = (target) => (element) => (
    tries.push(element), element.number === target
  );

  afterEach(() => {
    tries.length = 0;
  });

  test("Finds item in array with best case O(1)", () => {
    const comparator = comparatorFactory(1);
    const result = linearSearch(array, comparator);
    const expected = { number: 1 };

    expect(result).toEqual(expected);
    expect(tries.length).toEqual(1);
  });

  test("Finds item in array with worst case O(n)", () => {
    const comparator = comparatorFactory(5);
    const result = linearSearch(array, comparator);
    const expected = { number: 5 };

    expect(result).toEqual(expected);
    expect(tries.length).toEqual(5);
  });
});
