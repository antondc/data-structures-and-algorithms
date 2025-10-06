import { buildPrefix, getPrefixSum } from './prefix_sum';

// Problem: Max sum of any subarray of length k = 3 using prefix sums.
// Input: A = [2, 1, 5, 1, 3, 2], k = 3

describe('Max sum of any subarray of length k', () => {
  test('Returns correct result', () => {
    let maxSum = 0;
    const array = [2, 1, 5, 1, 3, 2];
    const prefix = buildPrefix(array);
    const expected_prefix = [0, 2, 3, 8, 9, 12, 14];
    expect(prefix).toEqual(expected_prefix);

    const result_0_2 = getPrefixSum(prefix, 0, 2);
    expect(result_0_2).toEqual(8);
    if (result_0_2 > maxSum) maxSum = result_0_2;

    const result_1_3 = getPrefixSum(prefix, 2, 4);
    expect(result_1_3).toEqual(9);
    if (result_1_3 > maxSum) maxSum = result_1_3;

    const result_2_4 = getPrefixSum(prefix, 2, 4);
    expect(result_2_4).toEqual(9);
    if (result_2_4 > maxSum) maxSum = result_2_4;

    const result_3_5 = getPrefixSum(prefix, 3, 5);
    expect(result_3_5).toEqual(6);
    if (result_3_5 > maxSum) maxSum = result_3_5;

    expect(maxSum).toEqual(9);
  });
});
