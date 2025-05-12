# Graph

**Graphs** are abstract data structures that help represent relationships between pairs of objects. A graph is composed of **vertices (or nodes)** connected by **edges (or arcs)**. Commonly used in networking, social media, route mapping, and dependency resolution.

## Types:

- **Directed**: Edges have a direction, indicating a one-way relationship (e.g., A → B). Called a "digraph".
- **Undirected**: Edges have no direction; the relationship is bidirectional (e.g., A — B).
- **Weighted**: Each edge has an associated numeric value (weight), representing cost, distance, etc.
- **Unweighted**: All edges are equal in weight or have no weight assigned.
- **Cyclic**: Contains at least one cycle: a path that starts and ends at the same vertex.
- **Acyclic**: No cycles present.
- **Connected**: There is a path between every pair of vertices (applies to undirected graphs).
- **Disconnected**: Not all vertices are reachable from each other.
- **Sparse**: Few edges relative to the number of vertices.
- **Dense**: Many edges relative to the number of vertices.
- **Simple**: No loops (edges from a node to itself) or multiple edges between the same pair of nodes.
- **Multigraph**: Can contain loops and/or multiple edges between the same two vertices.
- **Complete**: Every pair of distinct vertices is connected by an edge.
- **Incomplete**: Almost one pair of distinct vertices does not contain all possible edges. Most real-world graphs are incomplete.
- **Bipartite**: Vertices can be divided into two disjoint sets, and each edge connects a vertex from one set to the other. Common in matching problems like job assignments.

## Data structures

- **Adjacency List**: An array or list where each vertex stores a list of adjacent vertices. Efficient for sparse graphs.

          Unweighted graph
          ----------------

          A --- B
          |     |
          C     D

          adj_list = {
              'A': ['B', 'C'],
              'B': ['A', 'D'],
              'C': ['A'],
              'D': ['B']
          }

- **Adjacency Matrix**: A two-dimensional array of size V × V, where each matrix cell (matrix[i][j]) indicates whether there is an edge from vertex i to vertex j. Value 1 for unweighted graphs or the weight in weighted graphs.

        Unweighted graph
        ----------------

        A --- B
        |     |
        C     D

            A B C D
        A [ 0 1 1 0 ]
        B [ 1 0 0 1 ]
        C [ 1 0 0 0 ]
        D [ 0 1 0 0 ]

- **Edge List**: A simple list of all edges represented as pairs or tuples or triples (for weighted edges).

          Unweighted graph
          ----------------

          A --- B
          |     |
          C     D

          edge_list = [
              (0, 1),  # A — B
              (0, 2),  # A — C
              (1, 3)   # B — D
          ]

## Traversal Algorithms

As in trees, traversal in graphs refers to visiting all the vertices or a subset, usually to perform search, discovery, or computation.

### Depth-First Search (DFS)

- Explores as far as possible along each branch before backtracking.
- Implemented using recursion or an explicit stack.
- Useful for cycle detection, topological sorting, and pathfinding.

### Breadth-First Search (BFS)

- Visits all neighbors of a node before going deeper.
- Implemented using a queue.
- Commonly used to find the shortest path in unweighted graphs.

## Applications

- **Social Networks**: Modeling relationships between people.
- **Navigation Systems**: Routing and map pathfinding.
- **Dependency Resolution**: Task scheduling, package managers.
- **Web Crawling**: Representing and traversing hyperlinks.
- **Game AI**: Pathfinding using A\* and Dijkstra’s algorithms.
- **Network Routing**: Data packet transmission optimization.
