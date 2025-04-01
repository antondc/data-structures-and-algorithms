# Selection Sort

Comparison-based sorting algorithm that repeatedly selects the smallest element from the unsorted portion and swaps it with the first unsorted element.
Simple and inefficient, for educational purposes only.

## Pseudocode

```
SELECTION_SORT(A):
  for i from 0 to length of A - 1:
    min_index = i

    for j from i + 1 to length of A - 1:
      if A[j] < A[min_index]:
        min_index = j

    if min_index ≠ i:
      swap A[i] and A[min_index]
```

## Explanation

The algorithm divides the array into two parts: sorted and unsorted.
It finds the smallest element from the unsorted section and moves it to its correct position in the sorted section.

## Characteristics

### Time complexity:

- Best case: O(n²).
- Average case: O(n²).
- Worst case: O(n²).

## Example

### Input:

`[3, 1, 4, 2]`

### Execution Steps:

```
Initial: [3, 1, 4, 2]
Select min (1) → Swap with 3
[1, 3, 4, 2]
Select min (2) → Swap with 3
[1, 2, 4, 3]
Select min (3) → Swap with 4
[1, 2, 3, 4]
```

### Output:

`[1, 2, 3, 4]`
