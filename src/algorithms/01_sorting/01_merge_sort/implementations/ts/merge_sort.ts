export const merge = (
  left: Array<number>,
  right: Array<number>
): Array<number> => {
  let sorted_items: Array<number> = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted_items.push(left.shift());
    } else {
      sorted_items.push(right.shift());
    }
  }

  return sorted_items.concat(left).concat(right);
};

export const merge_sort = (unsorted_array: Array<number>): Array<number> => {
  // If input has one or none element, it is already sorted
  if (unsorted_array.length <= 1) {
    return unsorted_array;
  }

  // Split
  const left = unsorted_array.slice(0, unsorted_array.length / 2);
  const right = unsorted_array.slice(unsorted_array.length / 2);

  // Sort recursively
  let left_sorted = merge_sort(left);
  let right_sorted = merge_sort(right);


  return merge(left_sorted, right_sorted)
};
