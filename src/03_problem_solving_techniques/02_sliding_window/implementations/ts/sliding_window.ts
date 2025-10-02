export const slidingWindow = (array: Array<number>, size: number): number => {
  if (size > array.length) {
    return
  }

  let windowSum: number=0;
  let maxSum: number;

  for (let i = 0; i < size; i++) {
    windowSum += array[i];
  }

  maxSum = windowSum;

  for (let i = size; i < array.length; i++) {
    windowSum += array[i] - array[i - size];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}
