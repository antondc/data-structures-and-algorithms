# Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent
elements, and swaps them if they are in the wrong order. The process continues until the list is sorted.  
Mainly used for educational purposes due to its inefficiency compared to other sorting algorithms like
Merge Sort or Quick Sort.

## Pseudocode

```
BUBBLE_SORT(A):
    n = length of A
    repeat (n - 1) times:
        swapped = false
        for i from 0 to n - 2:
            if A[i] > A[i + 1]:
                swap A[i] and A[i + 1]
                swapped = true
        if not swapped:
            break
```

## Explanation

Bubble Sort works by making multiple passes through the array:

1. In each pass, adjacent elements are compared and swapped if they are out of order.
2. The largest element "bubbles up" to its correct position at the end.
3. The process repeats for the remaining unsorted portion of the array.
4. If no swaps occur in a pass, the array is already sorted, and the algorithm terminates early.

Time complexity:

- Best case (already sorted): `O(n)`
- Average case:  `O(n²)`
- Worst case: `O(n²)`

## Example

### Input:

`[5, 3, 8, 4, 2]`

### Execution Steps:

```
[5, 3, 8, 4, 2]  → Compare (5,3) → Swap → [3, 5, 8, 4, 2]
[3, 5, 8, 4, 2]  → Compare (5,8) → No swap
[3, 5, 8, 4, 2]  → Compare (8,4) → Swap → [3, 5, 4, 8, 2]
[3, 5, 4, 8, 2]  → Compare (8,2) → Swap → [3, 5, 4, 2, 8]

[3, 5, 4, 2, 8]  → Compare (3,5) → No swap
[3, 5, 4, 2, 8]  → Compare (5,4) → Swap → [3, 4, 5, 2, 8]
[3, 4, 5, 2, 8]  → Compare (5,2) → Swap → [3, 4, 2, 5, 8]

[3, 4, 2, 5, 8]  → Compare (3,4) → No swap
[3, 4, 2, 5, 8]  → Compare (4,2) → Swap → [3, 2, 4, 5, 8]

[3, 2, 4, 5, 8]  → Compare (3,2) → Swap → [2, 3, 4, 5, 8]
```

### Output:

`[2, 3, 4, 5, 8]`
