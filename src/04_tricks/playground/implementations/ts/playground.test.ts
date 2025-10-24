import { myFunction } from './playground';

describe('Playground', () => {
  test('Returns correct result', () => {
    const data = [1, 2];
    const result = myFunction(data);
    const expectedResult = [2, 3];
    expect(result).toEqual(expectedResult);
  });
});
