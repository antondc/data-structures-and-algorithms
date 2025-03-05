export function partition(
  array: Array<number>,
  left: number,
  right: number
): number {
  let pivot = array[right]; // last item
  let i = left - 1; // start pointer before first item

  // from pointer to item before last
  for (let j = left; j < right; j++) {
    // if current item is smaller or equal than pivot, swap it with item under pointer and increase pointer
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Center the pivot between lesser and greater items by swapping it with first greater item
  [array[i + 1], array[right]] = [array[right], array[i + 1]];

  return i + 1;
}

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
