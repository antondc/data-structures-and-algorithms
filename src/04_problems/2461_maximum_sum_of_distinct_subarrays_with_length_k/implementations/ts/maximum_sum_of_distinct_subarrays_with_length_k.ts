export const maxSumSubArrays = (array: Array<number>, size: number): number => {
  let left = 0;
  let right = size;
  let max = 0;

  while (right <= array.length) {
    const subArray = array.slice(left, right)
    const allDistinct = new Set(subArray);
    if (allDistinct.size !== subArray.length) {
      break;
    }

    const result = subArray.reduce((acc, curr) => (acc = acc + curr, acc), 0);
    if (result > max) {
      max = result;
    }

    right = right + 1;
    left = left + 1;
  }

  return max;
}
