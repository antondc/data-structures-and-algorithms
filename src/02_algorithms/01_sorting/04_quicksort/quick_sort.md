# Quick Sort

Divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into elements less than and greater than the pivot, and recursively sorts the sub-arrays.
Efficient.

## Pseudocode

```
PARTITION(A):
  right = length of A - 1
  i = 0

  for j from 0 to right:
    if A[j] <= A[right]:
      swap B[i] and B[j]
      i = i + 1

  swap B[i ] and B[right]

  return i

QUICKSORT(A):
  if length of A > 1:
    pivot_index = PARTITION(A)
    QUICKSORT(B[0:pivot_index])
    QUICKSORT(B[pivot_index + 1:...])
```

## Explanation

- Choose a pivot (commonly the last element).
- Partition the array:
  - Move elements smaller than or equal to the pivot to the left.
  - Move elements greater than the pivot to the right.
- Place the pivot in its correct position.
- Recursively apply QuickSort to the left and right partitions.

## Characteristics

### Time complexity:

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
