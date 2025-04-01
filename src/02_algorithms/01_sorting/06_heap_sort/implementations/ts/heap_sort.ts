import {
  heap,
  heapify,
} from "../../../../../01_data_structures/07_heap/implementations/ts/heap";

export const heapSort = (array: Array<number>) => {
  heap(array);

  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];

    heapify(array, 0, i);
  }
};
