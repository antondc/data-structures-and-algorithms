export const bubble_sort = (unsorted_array: Array<number>): Array<number> => {
  const cloned_array = [...unsorted_array]

  // Iterate array repeatedly until sorted
  while (true) {
    let swapped = false;

    // Iterate for window right item
    for (let i = 0; i < cloned_array.length - 1; i++) {
      if (cloned_array[i] > cloned_array[i + 1]) {
        [cloned_array[i], cloned_array[i + 1]] = [cloned_array[i + 1], cloned_array[i]];

        swapped = true;
      }
    }

    // If no item swapped, array is ordered
    if (!swapped) break;
  }

  return cloned_array;
};
