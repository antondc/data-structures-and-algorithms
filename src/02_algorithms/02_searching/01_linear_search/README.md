# Linear Search

## Description

**Linear Search** is the simplest searching algorithm. It checks each element in a collection (array, list, etc.) one by one until it finds the target value or reaches the end. It does not require the input to be sorted and works on any iterable data structure.
Useful for small datasets or unsorted collections where simplicity is more important than performance.

- Linear search is **inefficient** for large datasets.
- It is **easy to implement** and works on **unsorted** data.
- It is a **fallback** when no assumptions can be made about the data.

## Pseudocode

The algorithm starts at the beginning of the list and checks each element in order:

```
LINEAR_SEARCH(array, target):
  for i from 0 to array.length - 1:
    if array[i] == target:
      return i
  return NULL
```

## Characteristics

### Time Complexity

| Case       | Time Complexity |
| ---------- | --------------- |
| Best Case  | O(1)            |
| Average    | O(n)            |
| Worst Case | O(n)            |

- **Best case:** Target is the first element.
- **Worst case:** Target is the last element or not in the list.

### Space Complexity

- O(1): No additional space is required except for variables used during the search.
