# Quick Sort

QuickSort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into elements
less than and greater than the pivot, and recursively sorts the sub-arrays.
QuickSort is one of the most efficient sorting algorithms and is widely used in practice.

## Pseudocode

```
QUICKSORT(A, low, high):
  if low < high:
    pivot_index, B = PARTITION(A, low, high)
    left_sorted = QUICKSORT(B, low, pivot_index - 1)
    right_sorted QUICKSORT(left_sorted, pivot_index + 1, high)

    return right_sorted

PARTITION(A, low, high):
  B = A
  pivot = B[high] // last item
  i = low - 1 // start pointer on first item

  // from pointer to item before last
  for j from low to high - 1:
  // if current item is smaller than pivot, swap it with item under pointer and increase pointer
    if B[j] ≤ pivot:
      i = i + 1
      swap B[i] and B[j]

  // Center the pivot between lesser and greater items by swapping it with first greater item
  swap B[i + 1] and B[high]

  return i, B
```

## Explanation

- Choose a pivot (commonly the last element).
- Partition the array:
  - Move elements smaller than or equal to the pivot to the left.
  - Move elements greater than the pivot to the right.
- Place the pivot in its correct position.
- Recursively apply QuickSort to the left and right partitions.

Time complexity:

- Best: `O(n log n)`.
- Average case: `O(n log n)`.
- Worst case (already sorted array with poor pivot choice): `O(n²)`.

## Example

### Input:

`[8, 7, 6, 5, 4, 3, 2, 1]`

### Execution Steps:

```
Pivot = 1, Partition: [1] [8, 7, 6, 5, 4, 3, 2]
Pivot = 2, Partition: [1, 2] [8, 7, 6, 5, 4, 3]
Pivot = 3, Partition: [1, 2, 3] [8, 7, 6, 5, 4]
Pivot = 4, Partition: [1, 2, 3, 4] [8, 7, 6, 5]
Pivot = 5, Partition: [1, 2, 3, 4, 5] [8, 7, 6]
Pivot = 6, Partition: [1, 2, 3, 4, 5, 6] [8, 7]
Pivot = 7, Partition: [1, 2, 3, 4, 5, 6, 7] [8]
```

### Output:

`[1, 2, 3, 4, 5, 6, 7, 8]`
