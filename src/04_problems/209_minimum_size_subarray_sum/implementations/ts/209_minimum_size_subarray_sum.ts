// O(n²+n);
export const minimumSizeSubarraySum = (array: Array<number>, target: number): number => {
  const n = array.length;
  const prefix = [0];

  for (let i = 1; i < n + 1; i++) {
    prefix[i] = prefix[i - 1] + array[i - 1];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const result = prefix[j + i + 1] - prefix[j];

      if (result === target) {
        return i + 1;
      }
    }
  }

  return 0;
};
