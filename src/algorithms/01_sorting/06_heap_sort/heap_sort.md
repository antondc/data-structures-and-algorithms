# Heap Sort

Comparison-based sorting algorithm that utilizes a binary heap data structure to sort elements. It first transforms the input array into a max heap, ensuring that the largest element is at the root. The algorithm then repeatedly swaps the root with the last unsorted element and reduces the heap size, maintaining the heap property until the array is sorted.​

## Pseudocode

```
HEAP_SORT(A):
  BUILD_MAX_HEAP(A)
  for i from length of A - 1 downto 1:
    swap A[0] and A[i]
    HEAPIFY(A, 0, i)

BUILD_MAX_HEAP(A):
  for i from floor(length of A / 2) - 1 downto 0:
    HEAPIFY(A, i, length of A)

HEAPIFY(A, i, heap_size):
  largest = i
  left = 2 * i + 1
  right = 2 * i + 2

  if left < heap_size and A[left] > A[largest]:
    largest = left

  if right < heap_size and A[right] > A[largest]:
    largest = right

  if largest ≠ i:
    swap A[i] and A[largest]
    HEAPIFY(A, largest, heap_size)
```

## Explanation

Heap Sort operates by leveraging the properties of a max heap—a complete binary tree where each node is greater than or equal to its children. The algorithm consists of two main phases:​

- Build Max Heap: Convert the unsorted array into a max heap. This ensures that the largest element is at the root of the heap.​
- Sort the Array:
  - Swap the root (maximum element) with the last element of the heap.​
    - Reduce the heap size by one to exclude the last element from the heap.​
    - Heapify the root to restore the max heap property.​
    - Wikipedia+1Fully Understood+1
    - Repeat the process until the heap size is reduced to one.​

This method ensures that the array is sorted in ascending order.​

### Time Complexity:

- Best case: O(n log n)​
- Average case: O(n log n)​
- Worst case: O(n log n)​

### Space Complexity:

- O(1) auxiliary space, as Heap Sort is an in-place sorting algorithm.​

### Stability:

Heap Sort is not a stable sorting algorithm, meaning it may not preserve the relative order of equal elements.​

## Example

Input:

[3, 1, 4, 2]
Execution Steps:

Initial array: [3, 1, 4, 2]

Build Max Heap:
Step 1: Heapify at index 1
[3, 2, 4, 1]
Step 2: Heapify at index 0
[4, 2, 3, 1]

Sort the array:
Step 1: Swap root with last element
[1, 2, 3, 4]
Heapify root with heap size 3
[3, 2, 1, 4]
Step 2: Swap root with second last element
[1, 2, 3, 4]
Heapify root with heap size 2
[2, 1, 3, 4]
Step 3: Swap root with third last element
[1, 2, 3, 4]
Heapify root with heap size 1
[1, 2, 3, 4]

Output:

[1, 2, 3, 4]
