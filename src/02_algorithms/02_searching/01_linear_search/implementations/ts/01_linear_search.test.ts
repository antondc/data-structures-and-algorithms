import { linearSearch } from "./01_linear_search";


describe("Linear search ", () => {
  const array = Array.from({ length: 100 }, (_a, item) => item + 1);

  test("Finds item in array with best case O(1)", () => {
    const target = 1;
    const result = linearSearch(array, target);
    expect(result).toEqual(1);
  });
});
