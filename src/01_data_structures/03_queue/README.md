# Queue

Dynamic linear data structure following First-In-First-Out (FIFO) principle: first item added is the first to be removed.

Can be implemented with an array or with a linked list, being the latter more performant.

For sake of simplicity we will implement an array-based queue.

## Pseudocode

```
CREATE_QUEUE ()
  storage = []
```

```
ENQUEUE (value)
  add item to storage
```

```
DEQUEUE ()
  remove first item as ITEM from storage

  return ITEM
```

```
LENGTH ()
  return length of storage
```

```
IS_EMPTY ()
  if length of storage != 0
```

```
PEEK ()
  return first item of storage
```

## Explanation

- A queue has four methods:
  - Enqueue: returns queue.
  - Dequeue: returns dequeued item.
  - Is empty: check if queue is empty.
  - Length: get ammount of items in queue.
  - Peek: returns first item from queue without dequeuing it

## Characteristics

An array-based queue has an enqueue time complexity of O(1), but dequeue operations take O(n). That is due to the need of reindexing all elements of the array storage once extracted the dequeued item.

For large queues or applications with strict performance needs, a linked list–based queue is usually a more suitable.

### Operation Time Complexity (Array based)

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | O(1)            |
| Dequeue   | O(n)            |
| Is empty  | O(1)            |
| Length    | O(1)            |
| Peek      | O(1)            |
