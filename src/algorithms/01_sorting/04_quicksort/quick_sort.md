# Quick Sort

QuickSort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into elements
less than and greater than the pivot, and recursively sorts the sub-arrays.
QuickSort is one of the most efficient sorting algorithms and is widely used in practice.

## Pseudocode

```
QUICKSORT(A, left, right):
  if left < right:
    pivot_index, B = PARTITION(A, left, right)
    left_sorted = QUICKSORT(B, left, pivot_index - 1)
    right_sorted QUICKSORT(left_sorted, pivot_index + 1, right)

    return right_sorted

PARTITION(A, left, right):
  B = A
  pivot = B[right]
  t = left

  for i from left to right - 1:
    if B[i] ≤ pivot:
      swap B[t] and B[i]
      t = t + 1

  swap B[t] and B[right]

  return t, B
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
