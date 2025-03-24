export const heapify = (array: Array<number>, i: number, heapSize: number) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, largest, heapSize);
  }
};

export const buildMaxHeap = (array: Array<number>) => {
  // Iterate from last non-leaf node to root
  const maxNonLeafNode = Math.floor(array.length / 2);

  for (let i = maxNonLeafNode; i >= 0; i--) {
    heapify(array, i, array.length);
  }
};
