import { AdjacencyList } from "./adjacency_list";

describe("AdjacencyList()", () => {
  test("Is instantiated", async () => {
    const graph = new AdjacencyList();

    expect(graph).toEqual({ graph: {} });
  });
});

describe("addVertex()", () => {
  test("Adds a vertex", async () => {
    const graph = new AdjacencyList();

    graph.addVertex("a");
    expect(graph).toEqual({ graph: { a: [] } });

    graph.addVertex("a");
    expect(graph).toEqual({ graph: { a: [] } });

    graph.addVertex("b");
    expect(graph).toEqual({ graph: { a: [], b: [] } });
  });
});

describe("addEdge()", () => {
  test("Adds an undirected edge", async () => {
    const graph = new AdjacencyList();
    graph.addVertex("a").addVertex("b");
    graph.addEdge("a", "b");

    expect(graph).toEqual({
      graph: {
        a: [
          {
            value: "b",
            weight: undefined,
          },
        ],
        b: [
          {
            value: "a",
            weight: undefined,
          },
        ],
      },
    });
  });

  test("Adds a directed edge", async () => {
    const graph = new AdjacencyList();
    graph.addVertex("a").addVertex("b");
    graph.addEdge("a", "b", { directed: true });

    expect(graph).toEqual({
      graph: {
        a: [{ value: "b", weight: undefined }],
        b: [],
      },
    });
  });

  test("Adds an edge into an empty graph", async () => {
    const graph = new AdjacencyList();
    graph.addEdge("a", "b");

    expect(graph).toEqual({ graph: {} });
  });

  test("Adds an edge into a graph missing one vertex", async () => {
    const graph = new AdjacencyList().addVertex("a").addEdge("a", "b");

    expect(graph).toEqual({ graph: { a: [] } });
  });
});

describe("removeEdge()", () => {
  test("Removes edge from empty graph", async () => {
    const graph = new AdjacencyList().removeEdge("a", "b");

    expect(graph).toEqual({ graph: {} });
  });

  test("Removes edge from graph with vertices but no edges", async () => {
    const graph = new AdjacencyList()
      .addVertex("a")
      .addVertex("b")
      .removeEdge("a", "b");

    expect(graph).toEqual({ graph: { a: [], b: [] } });
  });

  test("Removes edge from graph with edges", async () => {
    const graph = new AdjacencyList()
      .addVertex("a")
      .addVertex("b")
      .addEdge("a", "b")
      .removeEdge("a", "b");

    expect(graph).toEqual({ graph: { a: [], b: [] } });
  });
});

describe("removeVertex()", () => {
  test("Removes vertex from empty graph", async () => {
    const graph = new AdjacencyList().removeVertex("a");

    expect(graph).toEqual({ graph: {} });
  });

  test("Removes vertex from graph with one vertex", async () => {
    const graph = new AdjacencyList().addVertex("a").removeVertex("a");

    expect(graph).toEqual({ graph: {} });
  });

  test("Removes vertex from graph with vertices and edges", async () => {
    const graph = new AdjacencyList()
      .addVertex("a")
      .addVertex("b")
      .addEdge("a", "b")
      .removeVertex("a");

    expect(graph).toEqual({ graph: { b: [] } });
  });
});

describe("getNeighbors()", () => {
  test("Gets neighbors from non-existing vertex", async () => {
    const graph = new AdjacencyList()
      .addVertex("a")
      .addVertex("b")
      .addEdge("a", "b");
    const neighbors = graph.getNeighbors("c");

    expect(neighbors).toEqual(null);
  });
  test("Gets neighbors from graph vertex", async () => {
    const graph = new AdjacencyList()
      .addVertex("a")
      .addVertex("b")
      .addEdge("a", "b");
    const neighbors = graph.getNeighbors("a");

    expect(neighbors).toEqual([{ value: "b", weight: undefined }]);
  });

  test("Gets neighbors from graph vertex", async () => {
    const graph = new AdjacencyList()
      .addVertex("a")
      .addVertex("b")
      .addEdge("a", "b");
    const neighbors = graph.getNeighbors("a");

    expect(neighbors).toEqual([{ value: "b", weight: undefined }]);
  });
});
