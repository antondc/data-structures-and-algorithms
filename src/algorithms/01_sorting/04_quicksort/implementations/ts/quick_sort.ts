export function quick_sort(
  A: Array<number>,
  L: number,
  R: number
): Array<number> {
  if (L >= R) return A;

  const { pivotIndex, partitionedArray } = partition(A, L, R);

  const leftSorted = quick_sort(partitionedArray, L, pivotIndex - 1);
  const rightSorted = quick_sort(leftSorted, pivotIndex + 1, R);

  return rightSorted;
}

export function partition(
  A: Array<number>,
  low: number,
  high: number
): {
  pivotIndex: number;
  partitionedArray: Array<number>;
} {
  const array = [...A];
  let pivot = array[high]; // last item
  let i = low - 1; // start pointer on first item

  // from pointer to item before last
  for (let j = low; j < high; j++) {
    // if current item is smaller than pivot, swap it with item under pointer and increase pointer
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Center the pivot between lesser and greater items by swapping it with first greater item
  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  return {
    pivotIndex: i + 1,
    partitionedArray: array,
  };
}
