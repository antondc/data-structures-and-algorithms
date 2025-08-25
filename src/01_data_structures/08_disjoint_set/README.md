# Disjoint Set Union (AKA Union-Find)

## Description

**Disjoint Set Union (DSU)** is a data structure used to efficiently manage a collection of disjoint (non-overlapping) groups of unique items (sets). It allows creating edges between nodes as well as querying whether two nodes belong to same set.

Typically implemented using an array or a parent-pointer tree. Often optimized with:

- **Path compression**: optimizes Find method by flattening the structure, useful for fast lookups,
- **Union by rank or size**: optimizes Union method by keeping track of tree's depths to decide the representative of the new tree.

Especially useful in graph-related algorithms and problems where group membership must be tracked efficiently: social or computer networks as well as puzzles related to islands, clusters and grouping.

## Methods

- **Find:** Returns the representative of the group containing the element.
- **Union:** Merges two groups by setting the representative of one as the representative of the other.
- **Connected:** Checks if two elements are in the same group.

## Pseudocode

When implemented with an array `representatives`, the indexes are the values we are tracking, and the values are the indexes of their representatives.
This, x is a value, and representatives[x] holds the representative.
If a value is equal to the representative it holds, this value is the representative of its group.
To merge groups, we hold a "ranks" array where each representative has a rank. To decide which representative prevails we compare their ranks, and act accordingly.

### Find (with path compression)

Finds the representative of the group and compresses the path:

    FIND(x):
      if representatives[x] != x:
        representatives[x] = FIND(representatives[x])
      return representatives[x] // returns the representative.

### Union (by rank)

Merges the groups containing x and y:

    UNION(x, y):
      representativeX = FIND(x)
      representativeY = FIND(y)

      if representativeX == representativeY:
        return

      if rank[representativeX] < rank[representativeY]:
        representatives[representativeX] = representativeY
      else if rank[representativeX] > rank[representativeY]:
        representatives[representativeY] = representativeX
      else:
        representatives[representativeY] = representativeX
        rank[representativeX] += 1

### Connected

Checks if two elements are in the same group.

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

- Where **α(n)** is the inverse Ackermann function, which is practically constant for all realistic values of `n`.

### Space Complexity

- O(n): One entry per element in `representative` and optionally `rank` arrays.
