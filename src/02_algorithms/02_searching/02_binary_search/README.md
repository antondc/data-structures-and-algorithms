# Binary Search

Efficient searching algorithm used on **sorted arrays**.
It works by repeatedly dividing the search interval in half and comparing the target value to the middle element.

## Pseudocode

```
BINARY_SEARCH(A, target):
  left = 0
  right = length of A - 1

  while left <= right:
    mid = floor((left + right) / 2)

    if A[mid] == target:
      return mid
    else if A[mid] < target:
      left = mid + 1
    else:
      right = mid - 1

  return -1
```

## Explanation

- Start with two pointers: one at the beginning (`left`) and one at the end (`right`) of the array.
- Find the middle index.
- If the middle element is equal to the target, return it.
- If the target is less, search the left half.
- If the target is greater, search the right half.
- Repeat until the element is found or the range is empty.

## Characteristics

### Time Complexity:

- Best case: `O(1)` — if the target is the middle element.
- Average case: `O(log n)`
- Worst case: `O(log n)`

### Space Complexity:

- Iterative: `O(1)`
- Recursive: `O(log n)` due to call stack.
