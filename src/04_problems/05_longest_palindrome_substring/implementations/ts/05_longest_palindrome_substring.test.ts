import { isPalindrome, longestPalindromeSubstring } from './05_longest_palindrome_substring';


describe('longestSubstringWithoutRepeatingCharacters', () => {
  test('Returns the correct result', () => {
    const string = 'a';
    const result = longestPalindromeSubstring(string);
    const expectedResult = 'a';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abb';
    const result = longestPalindromeSubstring(string);
    const expectedResult = 'bb';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abcacbd';
    const result = longestPalindromeSubstring(string);
    const expectedResult = 'bcacb';

    expect(result).toEqual(expectedResult);
  });

  test('Returns the correct result', () => {
    const string = 'abcacbd';
    const result = longestPalindromeSubstring(string);
    const expectedResult = 'bcacb';

    expect(result).toEqual(expectedResult);
  });
});

describe('isPalindrome', () => {
  test('Returns the correct result', () => {
    const string = 'a';
    const result = isPalindrome(string);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'aa';
    const result = isPalindrome(string);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });
  test('Returns the correct result', () => {
    const string = 'aba';
    const result = isPalindrome(string);
    const expectedResult = true;

    expect(result).toEqual(expectedResult);
  });
});
