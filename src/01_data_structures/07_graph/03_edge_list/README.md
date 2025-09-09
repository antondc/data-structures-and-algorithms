# Edge List

## Description

Graph data structure that represents a graph as a list of its edges. Each edge is a tuple of vertices that are connected. This representation is simple and space-efficient for graphs with few edges.

Used in cases where edge-centric processing is important, such as in some shortest path algorithms or when loading graph data from a file, as it requires fewer line updates.

## Methods

- **Add Edge:** Adds a tuple `(u, v)` to the list of edges. For undirected graphs, both `(u, v)` and `(v, u)` may be added.
- **Remove Edge:** Removes a tuple `(u, v)` from the edge list (and `(v, u)` for undirected graphs).
- **Get Edges:** Returns the list of edges in the graph.

## Pseudocode

### Add Edge

Adds an edge between two vertices.

    ADD_EDGE(edges, u, v, directed):
      edges.append((u, v))
      if not directed:
        edges.append((v, u))

### Remove Edge

Removes an edge from the edge list.

    REMOVE_EDGE(edges, u, v, directed):
      edges.remove((u, v))
      if not directed:
        edges.remove((v, u))

### Get Edges

Returns all edges in the graph.

    GET_EDGES(edges):
      return edges

## Characteristics

### Time Complexity

| Operation   | Time Complexity |
| ----------- | --------------- |
| Add Edge    | O(1)            |
| Remove Edge | O(e)            |
| Get Edges   | O(1)            |

- Where `e` is the number of edges.
- Removal requires scanning the list in the worst case.

### Space Complexity

- O(e): One entry per edge (or two for undirected graphs if represented redundantly).

## Example

### Graph Structure

Given this undirected graph:

    A --- B
    |     |
    C     D

Graph representation:

    G = [
        (A, B),
        (A, C),
        (B, D)
    ]

### Operations

#### Add Edge

    ADD_EDGE('E', 'B', false)

    G = [
      (A, B),
      (A, C),
      (B, D),
      (E, B),
      (B, E)
    ]

#### Remove Edge

    REMOVE_EDGE('A', 'C', false)

    G = [
      (A, B),
      (B, D),
      (E, B),
      (B, E)
    ]

#### Get Edges

    GET_EDGES() → [(A, B), (B, D), (E, B), (B, E)]
