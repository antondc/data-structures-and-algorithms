import { AdjacencyMatrix } from "./02_adjacency_matrix";

describe("AdjacencyMatrix()", () => {
  test("Adds undirected edge to graph vertex", async () => {
    const graph = new AdjacencyMatrix(["A", "B", "C"]);
    graph.addEdge("A", "B");

    const expected = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expected);
  });

  test("Adds directed edge to graph vertex", async () => {
    const graph = new AdjacencyMatrix(["A", "B", "C"]);
    graph.addEdge("A", "B", true);

    const expected = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expected);
  });

  test("Removes undirected edge from graph vertex", async () => {
    const graph = new AdjacencyMatrix(["A", "B", "C"]);
    graph.addEdge("A", "B");

    const expected = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expected);

    graph.removeEdge("A", "B");
    const expectedAfterRemoval = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expectedAfterRemoval);
  });

  test("Removes directed edge from graph vertex", async () => {
    const graph = new AdjacencyMatrix(["A", "B", "C"]);
    graph.addEdge("A", "B", true);

    const expected = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expected);

    graph.removeEdge("A", "B", true);
    const expectedAfterRemoval = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expectedAfterRemoval);
  });

  test("Removes directed edge from graph vertex with undirected edge", async () => {
    const graph = new AdjacencyMatrix(["A", "B", "C"]);
    graph.addEdge("A", "B", false);

    const expected = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expected);

    graph.removeEdge("A", "B", true);
    const expectedAfterRemoval = {
      vertices: ["A", "B", "C"],
      matrix: [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
      ],
    };

    expect(graph).toEqual(expectedAfterRemoval);
  });

  test("Gets neighbors of vertex", async () => {
    const graph = new AdjacencyMatrix(["A", "B", "C"]);
    const neighbors = graph
      .addEdge("A", "B")
      .addEdge("A", "C")
      .getNeighbors("A");

    const expected = ["B", "C"];
    expect(neighbors).toEqual(expected);

    graph.removeEdge("A", "C");
    const neighborsAfterRemove = graph.getNeighbors("A");

    const expectedAfterRemove = ["B"];
    expect(neighborsAfterRemove).toEqual(expectedAfterRemove);
  });
});
