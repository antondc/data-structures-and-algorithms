import { longestCommonPrefix } from './14_longest_common_prefix';

describe('longestCommonPrefix', () => {
  test('Returns the correct result', () => {
    const result = longestCommonPrefix(['flower', 'flow', 'flight']);
    const expectedResult = 'fl';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefix(['dog', 'racecar', 'car']);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const result = longestCommonPrefix(['interspecies', 'interstellar', 'interstate']);
    const expectedResult = 'inters';

    expect(result).toEqual(expectedResult);
  });
});
