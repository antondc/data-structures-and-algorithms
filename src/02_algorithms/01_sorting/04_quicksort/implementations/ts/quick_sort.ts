export function partition(
  array: Array<number>,
  left: number,
  right: number
): number {
  let i = left; // start pointer on first item

  // from pointer to item before last
  for (let j = left; j < right; j++) {
    // if current item is smaller or equal than pivot, swap it with item under pointer and increase pointer
    if (array[j] <= array[right]) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  // Center the pivot between lesser and greater items by swapping it with first greater item
  [array[i], array[right]] = [array[right], array[i]];

  return i;
}

// As JavaScript does not have slices we can not pass a slice of the original array recursively. Thus, we need the left-right indexes.
export function quick_sort(
  array: Array<number>,
  left: number = 0,
  right: number = array.length - 1
) {
  if (left < right) {
    const pivotIndex = partition(array, left, right);

    quick_sort(array, left, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, right);
  }
}
