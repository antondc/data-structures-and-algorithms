import { EdgeList } from "./03_edge_list";

describe("EdgeList()", () => {
  test("Adds undirected edge to graph", async () => {
    const graph = new EdgeList();
    graph.addEdge("A", "B");

    const expected = {
      graph: [
        ["A", "B"],
        ["B", "A"],
      ],
    };

    expect(graph).toEqual(expected);
  });

  test("Adds directed edge to graph vertex", async () => {
    const graph = new EdgeList();
    graph.addEdge("A", "B", { directed: true });

    const expected = {
      graph: [["A", "B"]],
    };

    expect(graph).toEqual(expected);
  });

  test("Removes undirected edge from graph vertex", async () => {
    const graph = new EdgeList();
    graph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D");

    const expected = {
      graph: [
        ["A", "B"],
        ["B", "A"],
        ["B", "C"],
        ["C", "B"],
        ["C", "D"],
        ["D", "C"],
      ],
    };

    expect(graph).toEqual(expected);

    graph.removeEdge("A", "B");
    const expectedAfterRemoval = {
      graph: [
        ["B", "C"],
        ["C", "B"],
        ["C", "D"],
        ["D", "C"],
      ],
    };

    expect(graph).toEqual(expectedAfterRemoval);
  });

  test("Removes directed edge from graph vertex", async () => {
    const graph = new EdgeList();
    graph
      .addEdge("A", "B", { directed: true })
      .addEdge("B", "C", { directed: true })
      .addEdge("C", "D", { directed: true });

    const expected = {
      graph: [
        ["A", "B"],
        ["B", "C"],
        ["C", "D"],
      ],
    };

    expect(graph).toEqual(expected);

    graph.removeEdge("A", "B", { directed: true });
    const expectedAfterRemoval = {
      graph: [
        ["B", "C"],
        ["C", "D"],
      ],
    };

    expect(graph).toEqual(expectedAfterRemoval);
  });

  test("Removes directed edge from graph vertex with undirected edge", async () => {
    const graph = new EdgeList();
    graph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D");

    const expected = {
      graph: [
        ["A", "B"],
        ["B", "A"],
        ["B", "C"],
        ["C", "B"],
        ["C", "D"],
        ["D", "C"],
      ],
    };

    expect(graph).toEqual(expected);

    graph.removeEdge("A", "B", { directed: true });
    const expectedAfterRemoval = {
      graph: [
        ["B", "A"],
        ["B", "C"],
        ["C", "B"],
        ["C", "D"],
        ["D", "C"],
      ],
    };

    expect(graph).toEqual(expectedAfterRemoval);
  });

  test("Gets neighbors of vertex", async () => {
    const graph = new EdgeList();
    const edges = graph
      .addEdge("A", "B")
      .addEdge("B", "C")
      .addEdge("C", "D")
      .getEdges();

    const expected = [
      ["A", "B"],
      ["B", "A"],
      ["B", "C"],
      ["C", "B"],
      ["C", "D"],
      ["D", "C"],
    ];

    expect(edges).toEqual(expected);
  });
});
