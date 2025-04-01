import {
  findIndexesNLogNTime,
  findIndexesNTime,
  findIndexesSquaredTime,
  Nums,
  Target,
} from "./01_two_sum";

describe("twoSum", () => {
  test("Returns correct indexes in O(nˆ2) time", async () => {
    const nums: Nums = [2, 11, 15, 3, 3, 1, 5, 11, 15, 6];
    const target: Target = 9;
    const indexes = findIndexesSquaredTime(nums, target);

    expect(indexes).toEqual([3, 9]);
  });
  test("Returns correct indexes in O(nˆ2) time", async () => {
    const nums: Nums = [3, 2, 4];
    const target: Target = 6;

    const indexes = findIndexesSquaredTime(nums, target);

    expect(indexes).toEqual([1, 2]);
  });
  test("Returns correct indexes in O(nˆ2) time", async () => {
    const nums: Nums = [3, 3];
    const target: Target = 6;

    const indexes = findIndexesSquaredTime(nums, target);

    expect(indexes).toEqual([0, 1]);
  });

  test("Returns correct indexes in O(n logn) time", async () => {
    const nums: Nums = [2, 11, 15, 3, 3, 1, 5, 11, 15, 6];
    const target: Target = 9;
    const indexes = findIndexesNLogNTime(nums, target);

    expect(indexes).toEqual([3, 9]);
  });
  test("Returns correct indexes in O(n logn) time", async () => {
    const nums: Nums = [3, 2, 4];
    const target: Target = 6;

    const indexes = findIndexesNLogNTime(nums, target);

    expect(indexes).toEqual([1, 2]);
  });
  test("Returns correct indexes in O(n logn) time", async () => {
    const nums: Nums = [3, 3];
    const target: Target = 6;

    const indexes = findIndexesNLogNTime(nums, target);

    expect(indexes).toEqual([0, 1]);
  });

  test("Returns correct indexes in O(n) time", async () => {
    const nums: Nums = [2, 11, 15, 3, 3, 1, 5, 11, 15, 6];
    const target: Target = 9;
    const indexes = findIndexesNTime(nums, target);

    expect(indexes).toEqual([3, 9]);
  });
  test("Returns correct indexes in O(n) time", async () => {
    const nums: Nums = [3, 2, 4];
    const target: Target = 6;

    const indexes = findIndexesNTime(nums, target);

    expect(indexes).toEqual([1, 2]);
  });
  test("Returns correct indexes in O(n) time", async () => {
    const nums: Nums = [3, 3];
    const target: Target = 6;

    const indexes = findIndexesNTime(nums, target);

    expect(indexes).toEqual([0, 1]);
  });
});
