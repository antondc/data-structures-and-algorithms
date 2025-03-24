# Heap

## Description

A Heap is a complete binary tree where the value of each parent node is greater than or equal to the values of its children. This ensures that the maximum element is always at the root.
It may be the already described max-heap or a min-heap.
Heaps are commonly used in priority queues and heapsort algorithms.

## Pseudocode

### Insertion

```
function insert(heap, value):
  append value to heap
  index = size of heap - 1
  while index > 0 and heap[parent(index)] < heap[index]:
    swap heap[parent(index)] with heap[index]
    index = parent(index)
```

### Heapify (Used for deletion and heap construction)

```
function maxHeapify(heap, index, heapSize):
  left = 2 * index + 1
  right = 2 * index + 2
  largest = index

  if left < heapSize and heap[left] > heap[largest]:
    largest = left
  if right < heapSize and heap[right] > heap[largest]:
    largest = right

  if largest != index:
    swap heap[index] with heap[largest]
    maxHeapify(heap, largest, heapSize)
```

### Deletion (Extract Max)

```
function extractMax(heap):
  if heap is empty:
      return None
  maxVal = heap[0]
  heap[0] = heap[last element]
  remove last element
  maxHeapify(heap, 0, size of heap)
  return maxVal
```

### Building a Max Heap

```
function buildMaxHeap(heap):
  for i = (size of heap // 2) down to 0:
    maxHeapify(heap, i, size of heap)
```

## Explanation

1. **Insertion:** Adds an element at the end of the heap and reorders it to maintain the heap property.
2. **Heapify:** Ensures that a subtree with a given root follows the max heap property.
3. **Deletion (Extract Max):** Removes the maximum element (root), replaces it with the last element, and heapifies.
4. **Building a Max Heap:** Converts an unordered array into a max heap in O(n) time.

### Time Complexity:

- Insertion: **O(log n)**
- Heapify: **O(log n)**
- Extract Max: **O(log n)**
- Build Max Heap: **O(n)**
- Heapsort: **O(n log n)**

### Space Complexity:

- **O(1)** for in-place heap operations

## Example

### Insertion

```
Heap = []
insert(Heap, 10)  -> [10]
insert(Heap, 20)  -> [20, 10]
insert(Heap, 15)  -> [20, 10, 15]
insert(Heap, 30)  -> [30, 20, 15, 10]
```

### Deletion

```
Heap = [30, 20, 15, 10]
extractMax(Heap)  -> returns 30
Heap after extraction: [20, 10, 15]
```

### Building a Max Heap

```
Input Array: [3, 5, 9, 6, 8, 20, 10, 12, 18, 9]
Max Heap: [20, 18, 10, 12, 9, 9, 3, 6, 5, 8]
```

A Max Heap efficiently supports priority queue operations, making it a fundamental data structure in computing.
