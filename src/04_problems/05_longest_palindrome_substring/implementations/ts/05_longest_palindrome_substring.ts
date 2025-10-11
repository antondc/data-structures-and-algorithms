// O(n)
const findBiggestPalindromeFromSubstring = (
  substring: string,
  left: number,
  right: number,
): [number, number] => {
  while (substring[left] && substring[right] && substring[left] === substring[right]) {
    left--;
    right++;
  }

  return [left + 1, right - 1];
};

// Optimal, O(n²)
export const longestPalindromeSubstringOptimal = (string: string): string => {
  let accumulator = '';

  for (let i = 0; i < string.length; i++) {
    const [leftOdd, rightOdd] = findBiggestPalindromeFromSubstring(string, i, i);
    const [leftEven, rightEven] = findBiggestPalindromeFromSubstring(string, i, i + 1);
    const [left, right] =
      rightOdd - leftOdd > rightEven - leftEven ? [leftOdd, rightOdd] : [leftEven, rightEven];
    const palindrome = string.substring(left, right + 1);

    accumulator = palindrome?.length > accumulator.length ? palindrome : accumulator;
  }

  return accumulator;
};

// ---------------------

// O(n)
const isPalindrome = (string: string) => {
  const length = string.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    const inverseIndex = length - i - 1;

    if (string[i] !== string[inverseIndex]) {
      return false;
    }
  }

  return true;
};

// Suboptimal, O(n³)
export const longestPalindromeSubstringSuboptimal = (string: string): string => {
  let accumulator = '';

  // O(n)
  for (let left = 0; left < string.length; left++) {
    // O(n)
    for (let right = 0; right < string.length; right++) {
      const substring = string.substring(left, right + 1);

      // O(n)
      if (isPalindrome(substring)) {
        if (substring.length > accumulator.length) {
          accumulator = substring;
        }
      }
    }
  }

  return accumulator;
};

export const _test = { isPalindrome, findBiggestPalindromeFromSubstring };
