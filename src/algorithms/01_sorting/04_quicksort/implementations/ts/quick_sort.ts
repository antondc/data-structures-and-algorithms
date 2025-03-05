export function quick_sort(unsortedArray: Array<number>): Array<number> {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const { pivotIndex, partitionedArray } = partition(unsortedArray);
  const left = partitionedArray.slice(0, pivotIndex);
  const right = partitionedArray.slice(pivotIndex);

  const leftSorted = quick_sort(left);
  const rightSorted = quick_sort(right);

  return leftSorted.concat(rightSorted);
}

export function partition(unsortedArray: Array<number>): {
  pivotIndex: number;
  partitionedArray: Array<number>;
} {
  const array = [...unsortedArray];
  let i = 0; // start pointer on first item
  let right = array.length - 1; // last item

  // from pointer to item before last
  for (let j = 0; j < right; j++) {
    // if current item is smaller than pivot, swap it with item under pointer and increase pointer
    if (array[j] <= array[right]) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  // Center the pivot between lesser and greater items by swapping it with first greater item
  [array[i], array[right]] = [array[right], array[i]];

  return {
    pivotIndex: i,
    partitionedArray: array,
  };
}
