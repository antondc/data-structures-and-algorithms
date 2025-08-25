# Bubble Sort

Comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
Simple and inefficient, for educational purposes only.

## Pseudocode

```
BUBBLE_SORT(A):
  repeat:
    swapped = false

    for i from 0 to length of A - 1:
      if A[i] > A[i + 1]:
        swap A[i] and A[i + 1]
        swapped = true

    if not swapped:
      break
```

## Explanation

Bubble Sort works by making multiple passes through the array:

- In each pass, the current item and its next adjacent element are compared and swapped if they are out of order.
- The largest element "bubbles up" to its correct position at the end.
- The process repeats for the remaining unsorted portion of the array.
- If no swaps occur in a pass, the array is already sorted, and the algorithm terminates early.

## Time complexity:

- Best case (already sorted): `O(n)`
- Average case: `O(n²)`
- Worst case: `O(n²)`

## Example

### Input:

`[5, 3, 8, 4, 2]`

### Execution Steps:

```
[5, 3, 8, 4, 2]
 3, 5           = Swap
[3, 5, 8, 4, 2]
    5, 8
[3, 5, 8, 4, 2]
       4, 8     = Swap
[3, 5, 4, 8, 2]
          2, 8  = Swap
[3, 5, 4, 2, 8]
 3, 5
[3, 5, 4, 2, 8]
    4, 5        = Swap
[3, 4, 5, 2, 8]
       2, 5     = Swap
[3, 4, 2, 5, 8]
          5, 8
[3, 4, 2, 5, 8]
 3, 4
[3, 4, 2, 5, 8]
    2, 4        = Swap
[3, 2, 4, 5, 8]
       4, 5
[3, 2, 4, 5, 8]
          5, 8
[3, 2, 4, 5, 8]
 2, 3           = Swap
[2, 3, 4, 5, 8]
    3, 4
[2, 3, 4, 5, 8]
       4, 5
[2, 3, 4, 5, 8]
          5, 8
[2, 3, 4, 5, 8]
 2, 3
[2, 3, 4, 5, 8]
    3, 4
[2, 3, 4, 5, 8]
       4, 5
[2, 3, 4, 5, 8]
          5, 8
[2, 3, 4, 5, 8]
```

### Output:

`[2, 3, 4, 5, 8]`
