// O(n)
export const isPalindrome = (string: string) => {
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
export const longestPalindromeSubstring = (s: string): string => {
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
