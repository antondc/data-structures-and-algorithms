# Breadth-First Search (BFS)

Graph traversal algorithm that explores all neighbors of a node before going deeper.
It uses a queue to track the next node to visit, ensuring that nodes are visited in order of increasing distance from the start node.

Good for finding the shortest path in unweighted graphs, exploring all nodes in a connected component, and solving problems where level-order processing is required.

## Pseudocode

    // Edge list
    // graph = {
    //   NODE_KEY: [NEIGHBOR, ...],
    // }

    graph = {
      A: [B, C],
      B: [A, D],
      C: [A, D],
      D: [B, C],
    }

    BREADTH_FIRST_SEARCH(graph, start):
      visited = EMPTY_SET
      queue = [start]

      WHILE queue IS NOT EMPTY:
        node = queue.DEQUEUE()

        IF node IN visited:
          CONTINUE

        visited.ADD(node)
        CALL visitNode(node)

        FOR neighbor IN graph[node]:
          IF neighbor NOT IN visited:
            queue.ENQUEUE(neighbor)

## Explanation

- Breadth-First Search uses a queue to ensure that nodes are visited in the order they are discovered — this leads to a level-by-level traversal.
- A `visited` set is used to keep track of nodes we've already processed, preventing duplicates and infinite loops.
- The algorithm starts by enqueuing the starting node.
- While the queue is not empty:
  - Dequeue the next node.
  - If it hasn't been visited:
    - Mark it as visited.
    - Call the `visitNode` function (e.g., for printing, collecting, etc.).
    - Enqueue all unvisited neighbors.
- This ensures that closer nodes are visited before more distant ones.

## Characteristics

### Time Complexity:

- `O(V + E)` where:
  - `V` = number of vertices
  - `E` = number of edges

Each node and edge is visited once in the worst case.

### Space Complexity:

- `O(V)` for the visited set and queue in the worst case.

## Notes

- Does guarantee shortest path in unweighted graphs.
- Particularly useful when:
  - Searching for shortest paths
  - Exploring nodes in layers or levels
  - Solving problems involving distance or reachability
  - Detecting bipartite graphs
