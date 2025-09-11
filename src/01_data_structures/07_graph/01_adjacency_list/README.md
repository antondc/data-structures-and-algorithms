# Adjacency List

## Description

Graph data structure that maps each vertex to a list of its adjacent (connected) vertices. This representation is ideal for sparse graphs, where the number of edges is much smaller than the number of possible connections.

It is commonly implemented using Hash maps or dictionaries as well as with arrays or lists of lists.
Widely used because they are space-efficient and allow quick access to a node's neighbors, which is useful in traversal algorithms like depth-first search and breadth-first search.

## Methods

- **Add Vertex:** Adds a new vertex to the graph with an empty adjacency list.
- **Add Edge:** Adds an edge by appending one node to another’s list. In undirected graphs, adds both directions.
- **Remove Edge:** Deletes a node from another’s list (and vice versa for undirected).
- **Remove Vertex:** Deletes the vertex and removes it from all other adjacency lists.
- **Get Neighbors:** Returns the list of nodes adjacent to a given node.

## Pseudocode

### Add Vertex

Adds a vertex to the graph.

    ADD_VERTEX(graph, vertex):
      if vertex not in graph:
        graph[vertex] = []

### Add Edge

Adds a connection from `u` to `v`. For undirected graphs, also connect `v` to `u`.

    ADD_EDGE(graph, u, v, directed):
      graph[u].append(v)
      if not directed:
        graph[v].append(u)

### Remove Vertex

Removes the vertex and all references to it from neighbors.

    REMOVE_VERTEX(graph, vertex):
      for neighbor in graph[vertex]:
        graph[neighbor].remove(vertex)
      delete graph[vertex]

### Remove Edge

Removes an edge between two nodes.

    REMOVE_EDGE(graph, u, v, directed):
      graph[u].remove(v)
      if not directed:
        graph[v].remove(u)

### Get Neighbors

Returns all vertices connected to the input vertex.

    GET_NEIGHBORS(graph, vertex):
      return graph[vertex]

## Characteristics

### Time Complexity

| Operation     | Time Complexity |
| ------------- | --------------- |
| Add Vertex    | O(1)            |
| Add Edge      | O(1)            |
| Remove Edge   | O(E/V)          |
| Remove Vertex | O(V + E)        |
| Get Neighbors | O(1)            |

- Where `V` is the number of vertices and `E` is the number of edges.
- Removing a vertex may involve scanning all adjacency lists.

### Space Complexity

- O(V + E): Each vertex has its own list, and each edge is stored once (or twice for undirected graphs).

## Example

### Graph Structure

Given this undirected graph:

    A --- B
    |     |
    C     D

Adjacency List:

    G = {
        A: [B, C]
        B: [A, D]
        C: [A]
        D: [B]
    }

### Operations

#### Add Vertex

    ADD_VERTEX('E')

    G = {
      A: [B, C],
      B: [A, D],
      C: [A],
      D: [B],
      E: []
    }

#### Add Edge

    ADD_EDGE('E', 'B', false)

    G = {
      A: [B, C],
      B: [A, D, E],
      C: [A],
      D: [B],
      E: [B]
    }

#### Remove Edge

    REMOVE_EDGE('A', 'C', false)

    G = {
      A: [B],
      B: [A, D, E],
      C: [],
      D: [B],
      E: [B]
    }

#### Remove Vertex

    REMOVE_VERTEX('B')
    G = {
      A: [],
      C: [],
      D: [],
      E: []
    }

#### Get Neighbors

    GET_NEIGHBORS('A') → [B]
    GET_NEIGHBORS('C') → []

### Variant

It is possible to add weights using tuples for the nodes, e.g.: (A, 1).

    A ---1--- B
    |         |
    4         2
    |         |
    C         D

    G = {
        A: [(B, 1), (C, 4)],
        B: [(A, 1), (D, 2)],
        C: [(A, 4)],
        D: [(B, 2)]
    }
