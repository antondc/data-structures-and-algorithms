# Bellman-Ford Algorithm

Graph algorithm for finding the shortest path from a starting node to all other nodes in a weighted graph, even with negative edge weights.

Unlike Dijkstra’s algorithm, Bellman-Ford works correctly when some edge weights are negative, and it can detect negative weight cycles in the graph.

Uses a weighted [Edge list](/src/01_data_structures/07_graph/03_edge_list/) as a data structure, with triples instead of tuples for the weights.

## Pseudocode

    //  G = [
    //    (FROM, TO, WEIGHT),
    //  ]

    G = [
      (A, B, 4),
      (A, C, 2),
      (B, C, 5),
      (B, D, 10),
      ...
    ]

    BELLMAN_FORD(graph, V, source):
      FOR EACH node IN V:
        distances[node] = ∞
      distances[source] = 0

      FOR i FROM 1 TO V - 1:
        FOR EACH (u, v, weight) IN graph:
          IF distances[u] + weight < distances[v]:
            distances[v] = distances[u] + weight

      // Check for negative-weight cycles
      FOR EACH (u, v, weight) IN graph:
        IF distances[u] + weight < distances[v]:
          ERROR: Negative-weight cycle detected

      return distances

## Explanation

- Initialize a distance map from the source to all nodes as infinity, except the source (0).
- Repeat `V - 1` times:
  - For each edge `(u, v, weight)`, update the shortest known distance to `v` if a shorter path via `u` is found.
- After `V - 1` passes, perform one more iteration to check for **negative-weight cycles**:
  - If any distance can still be updated, it means there is a cycle with total negative weight.
- Return the final distance map if no negative cycles are detected.

## Characteristics

### Time Complexity:

- `O(V × E)`: Where `V` is the number of vertices and `E` is the number of edges.

### Space Complexity:

- `O(V)` for distance map.
- `O(E)` for edge list representation.

## Notes

- Handles graphs with **negative edge weights**.
- Detects **negative cycles** and alerts the user.
- Slower than Dijkstra, but more flexible.

## Common Use Cases

- Currency arbitrage detection (financial applications)
- Routing protocols where link costs can be negative
- Detecting inconsistent constraints in scheduling problems
