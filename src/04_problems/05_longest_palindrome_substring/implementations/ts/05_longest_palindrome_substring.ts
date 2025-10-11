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
    const palindromeSubstringOdd = string.slice(leftOdd, rightOdd + 1);
    accumulator =
      palindromeSubstringOdd?.length > accumulator.length ? palindromeSubstringOdd : accumulator;
    const [leftEven, rightEven] = findBiggestPalindromeFromSubstring(string, i, i + 1);
    const palindromeEven = string.slice(leftEven, rightEven + 1);
    accumulator = palindromeEven?.length > accumulator.length ? palindromeEven : accumulator;
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
export const longestPalindromeSubstringSuboptimal = (s: string): string => {
  let accumulator = '';

  // O(n)
  for (let left = 0; left < s.length; left++) {
    // O(n)
    for (let right = 0; right < s.length; right++) {
      const substring = s.slice(left, right + 1);

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
