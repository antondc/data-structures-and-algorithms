# Floyd-Warshall Algorithm

Graph algorithm for finding the shortest paths between all pairs of nodes in a weighted graph. It works for both directed and undirected graphs and handles negative edge weights, as long as there are no negative cycles.

Unlike Dijkstra or Bellman-Ford, Floyd-Warshall is not limited to a single source. It builds a complete distance matrix between every pair of nodes.

Uses a weighted adjacency matrix or distance matrix as a data structure.

## Pseudocode

![Floyd Warshall example graph.](./img/floid_warshall_graph.png)

    G[i][j] = weight of edge i→j if exists, else ∞
    G[i][i] = 0 for all i

          j →
          A  B  C  D  E
    i A  [ 0, 1, 6, 3, ∞ ]
    ↓ B  [ ∞, 0, 3, ∞, 4 ]
      C  [ ∞, 3, 0, ∞,-3 ]
      D  [-2, ∞, 3, 0, ∞ ]
      E  [ ∞, 4, ∞, 4, 0 ]

    G = [
      [ 0, 1, 6, 3, ∞ ],
      [ ∞, 0, 3, ∞, 4 ],
      [ ∞, 3, 0, ∞,-3 ],
      [-2, ∞, 3, 0, ∞ ],
      [ ∞, 4, ∞, 4, 0 ],
    ]

    // To be instantiated by FLOYD_WARSHALL
    // next = [
    //   [ 0, 0, 0, 0, 0 ],
    //   [ 1, 1, 1, 1, 1 ],
    //   [ 2, 2, 2, 2, 2 ],
    //   [ 3, 3, 3, 3, 3 ],
    //   [ 4, 4, 4, 4, 4 ],
    // ]

    FLOYD_WARSHALL(G, vertices):
      next ← 2D array of size n × n where next[i][j] ← i for all i, j;

      FOR k IN RANGE 0 TO LENGTH(vertices):
        FOR i IN RANGE 0 TO LENGTH(vertices):
          FOR j IN RANGE 0 TO LENGTH(vertices):
            IF G[i][k] + G[k][j] < G[i][j]:
              G[i][j] = G[i][k] + G[k][j]
              next[i][j] = next[k][j]

      return (G, next)


      RECONSTRUCT_PATH(from, to, next, vertices):
        startIndex ← INDEX_OF(from) IN vertices
        endIndex ← INDEX_OF(to) IN vertices

        path ← [to]
        previous ← endIndex

        WHILE previous ≠ next[startIndex][previous]:
          previous ← next[startIndex][previous]
          PREPEND vertices[previous] TO path

        RETURN path

## Explanation

- `FLOYD_WARSHALL` may return only `distances`, or both `distances` and `next` matrices:
  - Distances: the shortest distances between all pairs of vertices.
  - Next: a matrix that can be used to reconstruct the shortest path.
- To reconstruct a path between two nodes, a function `RECONSTRUCT_PATH(from, to, next, vertices)` is required, which returns an array of vertex labels representing the shortest path.

### Steps

- Start with a 2D matrix `G` where `G[i][j]` represents the weight of the edge from `i` to `j`, or `∞` if there’s no direct connection.
- Initialize a matrix of n × n where for each row all values are the index of the row.
- Loop over each possible intermediate vertex `k`.
  - For every pair of vertices `(i, j)`, check whether the path `i → k → j` is shorter than the currently known `i → j` path.
    - If so, update `G[i][j]` with the shorter distance, and update the value in the `next` matrix.
- After all iterations, `G[i][j]` contains the shortest distance from `i` to `j`, and `next[i][j]` the next vertex to go to from `i` on the shortest path to `j`.

## Characteristics

### Time Complexity:

- `O(vertices³)`: due to three nested loops over all vertices.

### Space Complexity:

- `O(vertices²)`: for storing the distance matrix.

## Notes

- Handles negative edge weights.
- Detects negative cycles if `D[i][i] < 0` after processing.
- Slower than Dijkstra or Bellman-Ford, but provides all-pairs shortest paths.

## Common Use Cases

- Computing transitive closure in graphs
- All-pairs routing in networks
- Evaluating consistency of constraints in logic or scheduling
