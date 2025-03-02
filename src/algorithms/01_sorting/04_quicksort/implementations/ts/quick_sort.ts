export function quick_sort(unsorted_array: Array<number>, L: number, R: number): Array<number> {
  if (L >= R) return unsorted_array;

  const {pivotIndex, newArray} = partition(unsorted_array, L, R);

  const leftSorted = quick_sort(newArray, L, pivotIndex - 1);
  const rightSorted = quick_sort(leftSorted, pivotIndex + 1, R);

  return rightSorted;
}

function partition(unsorted_array: Array<number>, L: number, R: number): {
  pivotIndex: number,
  newArray: Array<number>
} {
  let newArray = [...unsorted_array];
  let pivot = newArray[R];
  let t = L;

  for (let i = L; i < R; i++) {
    if (newArray[i] <= pivot) {
      [newArray[t], newArray[i]] = [newArray[i], newArray[t]];
      t++;
    }
  }

  [newArray[t], newArray[R]] = [newArray[R], newArray[t]];

  return {pivotIndex: t, newArray};
}
