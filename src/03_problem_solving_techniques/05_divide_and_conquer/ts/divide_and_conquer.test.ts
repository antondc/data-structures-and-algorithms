import { sumArrayItems } from "./divide_and_conquer";

describe("SumArrayItems()", () => {
  test("Provides correct result", async () => {
    const array = [2, 4, 6];

    const result = sumArrayItems(array);

    expect(result).toBe(12);
  });
});
