import { minimumSizeSubarraySum } from './209_minimum_size_subarray_sum';


describe('minimumSizeSubarraySum', () => {
  test('Returns the correct result', () => {
    const array = [2, 3, 1, 2, 4, 3];
    const target = 7;
    const result = minimumSizeSubarraySum(array, target);
    const expectedResult = 2;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const array = [1, 4, 4];
    const target = 4;
    const result = minimumSizeSubarraySum(array, target);
    const expectedResult = 1;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const array = [1, 1, 1, 1, 1, 1, 1, 1];
    const target = 11;
    const result = minimumSizeSubarraySum(array, target);
    const expectedResult = 0;

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 44;
    const result = minimumSizeSubarraySum(array, target);
    const expectedResult = 8;

    expect(result).toEqual(expectedResult);
  });
});
