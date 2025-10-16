import { longestCommonPrefix } from './14_longest_common_prefix';


describe('longestCommonPrefix', () => {
  test('Returns the correct result', () => {
    const arr = ['flower', 'flow', 'flight'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'fl';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['dog', 'racecar', 'car'];
    const result = longestCommonPrefix(arr);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['', 'b'];
    const result = longestCommonPrefix(arr);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['a'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'a';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['cir', 'car'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'c';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['interspecies', 'interstellar', 'interstate'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'inters';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['throne', 'throne'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'throne';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['prefix', 'preform', 'prevent'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'pre';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['aa', 'a'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'a';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['reflower', 'flow', 'flight'];
    const result = longestCommonPrefix(arr);
    const expectedResult = '';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const arr = ['aabcd', 'aa', 'aaba'];
    const result = longestCommonPrefix(arr);
    const expectedResult = 'aa';

    expect(result).toEqual(expectedResult);
  });
});
