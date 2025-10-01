// Starting with a sorted array of integers, find a pair of numbers that sum to the given target.

export const twoPointers = (array: Array<number>, target: number): [number, number] => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] > target) {
      right = right - 1;
    } else if (array[left] + array[right] < target) {
      left = left + 1;
    } else {
      break;
    }
  }

  return [array[left], array[right]];
}
