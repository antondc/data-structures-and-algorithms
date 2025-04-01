export const insertion_sort = (array: Array<number>) => {
  // Iterate from second item to last
  for (let i = 1; i < array.length; i++) {
    const key = array[i]; // Value of current key position, start in second element
    let j = i;

    while (j > 0 && array[j - 1] > key) {
      array[j] = array[j - 1]; // Replace second element with first one
      j--; // Decrease counter, so we perform comparison and replace previous element if necessary
    }

    array[j] = key; // End of outer loop, insert key
  }
};
