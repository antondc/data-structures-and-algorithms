// Time: O(n) Space: O(n)
export const buildPrefix = (array: Array<number>): Array<number> => {
  const n = array.length;
  const prefix = new Array(n + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    prefix[i] = prefix[i - 1] + array[i - 1];
  }

  return prefix;
};

// Time: O(1)
export const getPrefixSum = (prefix: Array<number>, left: number, right: number): number => {
  return prefix[right + 1] - prefix[left];
};
