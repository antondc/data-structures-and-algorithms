# Shortest Path Algorithms

## Description

Shortest path algorithms help you find the shortest way to go from one point (node) to another in a graph.

Different algorithms work better depending on:

- If the graph has negative numbers as weights.
- If you need the shortest path from one node or between all nodes.
- If the graph has many connections (dense) or just a few (sparse).

These algorithms are useful in maps, networks, games, and many other problems.

## Types

- **Dijkstra's Algorithm**: finds shortest path from one node, but only works with **positive weights**.
- **Bellman-Ford Algorithm**: also finds shortest path from one node, and **works with negative weights**.
- **Floyd-Warshall Algorithm**: finds shortest paths between **all pairs of nodes**, and **works with negative weights**.

| Algorithm          | Works with Negative Weights | Time Cost          | When to Use                                                                 |
| ------------------ | --------------------------- | ------------------ | --------------------------------------------------------------------------- |
| **Dijkstra**       | ❌ No                       | `O((V + E) log V)` | Use when graph has **positive weights** and not many edges                  |
| **Bellman-Ford**   | ✅ Yes                      | `O(V × E)`         | Use when graph has **negative weights** or you need to **check for cycles** |
| **Floyd-Warshall** | ✅ Yes                      | `O(V³)`            | Use when graph has **many nodes** and you want **all-pairs shortest paths** |

## When to Use What

- **Dijkstra**: Good for large graphs with **positive weights only** (like in maps or routes).
- **Bellman-Ford**: Good if your graph has **negative weights** or you want to **detect cycles**.
- **Floyd-Warshall**: Good if you want the shortest path **between all nodes**, and the graph is **small or dense**.
