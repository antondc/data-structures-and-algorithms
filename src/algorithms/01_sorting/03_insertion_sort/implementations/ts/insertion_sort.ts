export const insertion_sort = (unsorted_array: Array<number>): Array<number> => {
  const cloned_array = [...unsorted_array]

  // Iterate from second item to last
  for (let i = 1; i < cloned_array.length; i++) {
    const key = cloned_array[i]; // Value of current key position, start in second element
    let j = i;

    while (j > 0 && cloned_array[j - 1] > key) {
      cloned_array[j] = cloned_array[j - 1]; // Replace second element with first one
      j--; // Decrease counter, so we perform comparison and replace previous element if necessary
    }

    cloned_array[j] = key; // End of outer loop, insert key
  }

  return cloned_array
};

