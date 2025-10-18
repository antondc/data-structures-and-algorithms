import { myFunction } from './playground';

describe('maxSumDistinctSubArrays', () => {
  test('Returns correct result', () => {
    const data = [1, 2];
    const result = myFunction(data);
    const expectedResult = [2, 3];
    expect(result).toEqual(expectedResult);
  });
});
