export const slidingWindow = (array: Array<number>, size: number): number => {
  let left = 0;
  let right = size;
  let max = 0;

  while (right <= array.length) {
    const subArray = array.slice(left, right)
    const result = subArray.reduce((acc, curr) => (acc = acc + curr, acc), 0);

    if (result > max) {
      max = result;
    }

    right = right + 1;
    left = left + 1;
  }

  return max;
}
