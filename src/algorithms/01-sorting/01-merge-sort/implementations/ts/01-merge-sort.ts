export const merge_already_sorted_arrays = (left: Array<number>, right: Array<number>): Array<number> => {
  // Final array will be the size of both provided arrays
  let sorted_items: Array<number> = Array.from({ length: left.length + right.length });

  let i = 0;
  let j = 0;

  // Iterate over the array that we will fill with items either in left or right arrays
  for (let k = 0; k < sorted_items.length; k++) {
    // If neither "i" and "j" pointers did reach the limit of their respective arrays
    if (i + 1 <= left.length && j + 1 <= right.length) {
      // Decide between current item in left array and current item in right array which one will be next in final array
      if (left[i] <= right[j]) {
        sorted_items[k] = left[i];

        i = i + 1;
      } else if (left[i] > right[j]) {
        sorted_items[k] = right[j];

        j = j + 1;
      }
    } else if (i + 1 <= left.length) {
      // If only "i" pointer didnt reach the limit —but "j" did—
      sorted_items[k] = left[i];

      i = i + 1;
    } else if (j + 1 <= right.length) {
      // If only "j" pointer didnt reach the limit —but "i" did—
      sorted_items[k] = right[j];

      j = j + 1;
    }
  }

  return sorted_items;
};

export const merge_sort = (unsorted_array: Array<number>): Array<number> => {
  if (unsorted_array.length <= 1) {
    return unsorted_array;
  } else {
    // If input has length bigger than two, then:println!
    // 1. Split it
    const left = unsorted_array.slice(0, unsorted_array.length / 2);
    const right = unsorted_array.slice(unsorted_array.length / 2);

    // 2. Sort it recursively
    let left_sorted = merge_sort(left);
    let right_sorted = merge_sort(right);

    let sorted_array_1 = merge_already_sorted_arrays(left_sorted, right_sorted);

    return sorted_array_1;
  }
};
