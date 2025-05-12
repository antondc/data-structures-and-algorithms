# Heap

## Description

A Heap is a _complete_ _ordered_ _binary_ tree with the restriction that the value of parent nodes are greater of equal than the value of children nodes.
There are two types:

- Max-heap: parent nodes are greater of equal than the value of children nodes.
- Min-heap: where the value of the parent nodes are lesser or equal than the value of the children nodes.

Commonly used in priority queues and heapsort algorithms.
Typically implemented with arrays, as they are complete trees.

## Pseudocode

### Heap

Builds a heap from an unordered array.

```
HEAP(array):
  for i = (size of array // 2) down to 0:
    heapify(array, i, size of array)
```

### Heapify

Swaps parent and children of a specific node if neccesary.
Utility for deletion and heap construction.

```
HEAPIFY(heap, index, heapSize):
  largest = index
  left = 2 * index + 1
  right = 2 * index + 2

  if left < heapSize and heap[left] > heap[largest]:
    largest = left
  if right < heapSize and heap[right] > heap[largest]:
    largest = right

  if largest != index:
    swap heap[index] with heap[largest]
    heapify(heap, largest, heapSize)
```

### Insert

Inserts an element into the heap.

```
INSERT(heap, value):
  append value to heap array
  index = size of heap - 1

  while index > 0 and heap[parent(index)] < heap[index]:
    swap heap[parent(index)] with heap[index]
    index = parent(index)
```

### Extract

```
EXTRACT(heap):
  if heap is empty:
      return None
  maxVal = heap[0]
  heap[0] = heap[last element]
  remove last element from heap array

  heapify(heap, 0, size of heap)

  return maxVal
```

## Explanation

1. **Heap (build):** Converts an unordered array into a max heap in O(n) time.
1. **Insert:** Adds an element at the end of the heap and reorders it to maintain the heap property.
1. **Heapify:** Ensures that a subtree with a given root follows the max heap property.
1. **Extract:** Removes and and returns the maximum element (root), replacing it with the last element and heapifying if necessary.

## Characteristics

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
