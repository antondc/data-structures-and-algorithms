export const selection_sort = (array: Array<number>) => {
  for (let i = 0; i < array.length - 1; i++) {
    let min_index = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }

    if (min_index !== i) {
      [array[i], array[min_index]] = [array[min_index], array[i]];
    }
  }
};
