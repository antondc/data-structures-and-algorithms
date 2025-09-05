import { dijkstra, Graph } from "./01_dijkstra";

describe("Dijkstra algorithm", () => {
  test("Finds the cost to reach all nodes", async () => {
    //      B   4    D
    //    1       ↗
    //  A       1    1
    //    2.  ↗
    //      C   3    E

    const graph: Graph = {
      A: [
        ["B", 1],
        ["C", 2],
      ],
      B: [["D", 4]],
      C: [
        ["E", 3],
        ["D", 1],
      ],
      D: [],
      E: [],
    };
    const expected = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 5,
    };
    const result = dijkstra(graph, "A");

    expect(result).toEqual(expected);
  });
});
