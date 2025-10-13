import { threeSum } from './15_three_sum';

// Helper to compare triplet sets ignoring order
function normalize(triplets: number[][]): number[][] {
  return triplets
    .map((t) => t.slice().sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < 3; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

describe('threeSum', () => {
  test('Example 1 from LeetCode', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = normalize(threeSum(nums));
    const expectedResult = normalize([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(result).toEqual(expectedResult);
  });

  test('Example 2 from LeetCode (no solution)', () => {
    const nums = [0, 1, 1];
    const result = normalize(threeSum(nums));
    const expectedResult: number[][] = [];
    expect(result).toEqual(expectedResult);
  });

  test('Example 3 from LeetCode (all zeros)', () => {
    const nums = [0, 0, 0];
    const result = normalize(threeSum(nums));
    const expectedResult = normalize([[0, 0, 0]]);
    expect(result).toEqual(expectedResult);
  });

  test('Multiple zeros should still yield one triplet only', () => {
    const nums = [0, 0, 0, 0, 0];
    const result = normalize(threeSum(nums));
    const expectedResult = normalize([[0, 0, 0]]);
    expect(result).toEqual(expectedResult);
  });

  test('All positive numbers (no triplet)', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = normalize(threeSum(nums));
    const expectedResult: number[][] = [];
    expect(result).toEqual(expectedResult);
  });

  test('All negative numbers (no triplet)', () => {
    const nums = [-5, -4, -3, -2, -1];
    const result = normalize(threeSum(nums));
    const expectedResult: number[][] = [];
    expect(result).toEqual(expectedResult);
  });

  test('Duplicates in input should not create duplicate triplets', () => {
    const nums = [-2, 0, 0, 2, 2];
    const result = normalize(threeSum(nums));
    const expectedResult = normalize([[-2, 0, 2]]);
    expect(result).toEqual(expectedResult);
  });

  test('Mixed values with multiple solutions', () => {
    const nums = [-2, -1, 0, 1, 2, -1, -4, 2, 2];
    const result = normalize(threeSum(nums));
    const expectedResult = normalize([
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(result).toEqual(expectedResult);
  });

  test('Length less than 3 returns empty array', () => {
    const nums1: number[] = [];
    const nums2 = [0, 1];
    expect(threeSum(nums1)).toEqual([]);
    expect(threeSum(nums2)).toEqual([]);
  });
});
