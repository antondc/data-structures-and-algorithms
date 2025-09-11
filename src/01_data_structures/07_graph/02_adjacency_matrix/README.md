# Adjacency Matrix

## Description

Graph data structure represented as a 2D array (matrix) of size `V x V`, where `V` is the number of vertices. Each cell `matrix[i][j]` indicates whether there is an edge from vertex `i` to vertex `j`.

This structure is ideal for dense graphs, where the number of edges is close to the number of possible connections.
It provides fast edge lookups at the cost of higher space usage.

## Methods

- **Add Vertex:** Adds a new row and column to the matrix.
- **Add Edge:** Sets `matrix[i][j] = 1` (or a weight) to represent a connection.
- **Remove Edge:** Sets `matrix[i][j] = 0`.
- **Remove Vertex:** Deletes a row and column (not typical, but possible).
- **Get Neighbors:** Scans the row for all columns with non-zero values.

## Pseudocode

### Add Vertex

Adds a new vertex to the graph.

    ADD_VERTEX(matrix):
      n = size of matrix
      for each row in matrix:
        row.append(0)
      matrix.append([0] * (n + 1))

### Add Edge

Adds an edge between `u` and `v`.

    ADD_EDGE(matrix, u, v, directed):
      matrix[u][v] = 1
      if not directed:
        matrix[v][u] = 1

### Remove Edge

Removes an edge between two nodes.

    REMOVE_EDGE(matrix, u, v, directed):
      matrix[u][v] = 0
      if not directed:
        matrix[v][u] = 0

### Get Neighbors

Returns all indices (vertices) with a 1 in the given row.

    GET_NEIGHBORS(matrix, vertex):
      neighbors = []
      for i from 0 to size of matrix:
        if matrix[vertex][i] == 1:
          neighbors.append(i)
      return neighbors

## Characteristics

### Time Complexity

| Operation     | Time Complexity |
| ------------- | --------------- |
| Add Vertex    | O(V)            |
| Add Edge      | O(1)            |
| Remove Edge   | O(1)            |
| Remove Vertex | O(V²)           |
| Get Neighbors | O(V)            |

- `V` is the number of vertices.

### Space Complexity

- O(V²): Each vertex requires a full row and column in the matrix.

## Example

### Graph Structure

Given this undirected graph:

    A --- B
    |     |
    C     D

Adjacency Matrix (A=0, B=1, C=2, D=3):

      0 1 2 3
    0 [0 1 1 0]  A
    1 [1 0 0 1]  B
    2 [1 0 0 0]  C
    3 [0 1 0 0]  D

### Operations

#### Add Vertex

    ADD_VERTEX(matrix)
    → Add a new row and column of 0s

#### Add Edge

    ADD_EDGE(matrix, 4, 1, false)
    → matrix[4][1] = 1
    → matrix[1][4] = 1

#### Remove Edge

    REMOVE_EDGE(matrix, 0, 2, false)
    → matrix[0][2] = 0
    → matrix[2][0] = 0

#### Remove Vertex

    REMOVE_VERTEX(matrix, 1)
    → Remove row 1 and column 1

#### Get Neighbors

    GET_NEIGHBORS(matrix, 0)
    → [1, 2]

### Variant

It is possible to add weights using tuples for the nodes, e.g.: (A, 1).

      A ---1--- B
      |         |
      4         2
      |         |
      C         D

      0  1  2  3
    0 [0, 1, 4, 0]   A
    1 [1, 0, 0, 2]   B
    2 [4, 0, 0, 0]   C
    3 [0, 2, 0, 0]   D
