# Disjoint Set Union (Union-Find)

## Description

**Disjoint Set Union (DSU)**, also known as **Union-Find**, is a data structure used to efficiently manage a collection of disjoint (non-overlapping) sets.
It supports two primary operations:

- **Find**: Determine which set a particular element belongs to.
- **Union**: Merge two sets together.

Especially useful in graph-related algorithms and in problems where group membership must be tracked efficiently.

Typically implemented using an array or a parent-pointer tree, often optimized with:

- **Path compression** (flattening the structure for fast lookups),
- **Union by rank or size** (keeping trees balanced).

## Methods

- **Make Set:** Initialize each element in its own set.
- **Find:** Return the representative (root) of the set containing the element.
- **Union:** Merge two sets, updating parent pointers.
- **Connected:** Check if two elements are in the same set.

## Pseudocode

### Find (with path compression)

Finds the root of the set and compresses the path:

    FIND(x):
      if parent[x] != x:
        parent[x] = FIND(parent[x])
      return parent[x]

### Union (by rank)

Merges the sets containing x and y:

    UNION(x, y):
      rootX = FIND(x)
      rootY = FIND(y)

      if rootX == rootY:
        return

      if rank[rootX] < rank[rootY]:
        parent[rootX] = rootY
      else if rank[rootX] > rank[rootY]:
        parent[rootY] = rootX
      else:
        parent[rootY] = rootX
        rank[rootX] += 1

### Connected

Checks if two elements are in the same set.

    CONNECTED(x, y):
      return FIND(x) == FIND(y)

## Characteristics

### Time Complexity

| Operation | Amortized Time Complexity |
| --------- | ------------------------- |
| Make Set  | O(1)                      |
| Find      | O(α(n))                   |
| Union     | O(α(n))                   |
| Connected | O(α(n))                   |

- Where **α(n)** is the inverse Ackermann function — practically constant for all realistic values of `n`.

### Space Complexity

- O(n): One entry per element in `parent` and optionally `rank` arrays.

## Example

### Initial State

Create sets for 5 elements:

    MAKE_SET(1)
    MAKE_SET(2)
    MAKE_SET(3)
    MAKE_SET(4)
    MAKE_SET(5)

    parent = { 1:1, 2:2, 3:3, 4:4, 5:5 }

### Union Operations

    UNION(1, 2)
    UNION(3, 4)
    UNION(2, 3)

    parent might look like:
    { 1:1, 2:1, 3:1, 4:3, 5:5 }

### Find / Connected

    FIND(4) → 1
    FIND(5) → 5
    CONNECTED(2, 4) → true
    CONNECTED(1, 5) → false
