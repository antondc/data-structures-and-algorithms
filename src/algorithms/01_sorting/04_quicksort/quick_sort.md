# Quick Sort

QuickSort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into elements
less than and greater than the pivot, and recursively sorts the sub-arrays.
QuickSort is one of the most efficient sorting algorithms and is widely used in practice.

## Pseudocode

### In-place

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

### Functional
A functional version will have a O(n) space complexity due to the need to clone arrays instead of working with their references.

```
PARTITION(A):
  i = 0
  right = length of B - 1

  // from pointer to item before last
  for j from 0 to right:
  // if current item is smaller than pivot, swap it with item under pointer and increase pointer
    if B[j] ≤ B[right]:
      i = i + 1
      swap B[i] and B[j]

  // Center the pivot between lesser and greater items by swapping it with first greater item
  swap B[i] and B[right]

  return i, B

QUICKSORT(A):
  if length of A <= 1
    return unsortedArray;

  pivot_index, B = PARTITION(A)
  left = B from 0 to pivot_index;
  right = B from pivot_index to end;

  left_sorted = QUICKSORT(left)
  right_sorted QUICKSORT(right)

  return concat of left_sorted and right_sorted
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
