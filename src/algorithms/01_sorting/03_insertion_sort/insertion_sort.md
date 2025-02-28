# Insertion Sort

Insertion Sort is a simple and efficient sorting algorithm that builds the sorted array one element at a time by
inserting each element into its correct position.

## Pseudocode

```
INSERTION_SORT(A):
  for i from 1 to length(A) - 1:
    key ← A[i]
    j ← i - 1

    while j ≥ 0 and A[j] > key:
      A[j + 1] ← A[j]
      j ← j - 1
    
    A[j + 1] ← key
    
    
[8, 7, 6, 5, 4, 3, 2, 1]
key = 7
j = 0
8 > 7


```

## Explanation

The algorithm iterates over the array, starting from index 1 (assuming the first element is already sorted).  
Each element is compared with previous elements and inserted into its correct position.  
This process continues until the entire array is sorted.

Time complexity:

- Best case (already sorted): O(n)
- Average case: O(n²)
- Worst case (reverse sorted): O(n²)

## Example

### Input:

`[1, 4, 3, 2]`

### Execution Steps:

```
    k₁
[1, 4, 3, 2] k₁=4
       k₂
[1, 4, 3, 2] k₂=3
      ↘
[1, 4, 4, 2] k₂=3
   ￬k₂    k₃
[1, 3, 4, 2] k₃=2
         ↘
[1, 3, 4, 4] k₃=2
      ↘
[1, 3, 3, 4] k₃=2
   ￬k₃
[1, 2, 3, 4]
```

₃

### Output:

`[1, 2, 3, 4]`
