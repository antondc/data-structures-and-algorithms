import { bellmanFord, Edges, Vertices } from "./02_bellman_ford";

describe("BellmanFord algorithm", () => {
  test("Finds the cost to reach all nodes", async () => {
    //          B  →.  5   →    D
    //        ↗.
    //      4.  ↑  ↘            ↑
    //    ↗
    //  A      -2      -1       3
    //.   ↘
    //      3   ↑           ↘.  ↑
    //     .  ↘
    //          C  →.  5   →    E

    const vertices: Vertices = ["A", "B", "C", "D", "E"];
    const edges: Edges = [
      ["A", "B", 4],
      ["A", "C", 3],
      ["B", "D", 5],
      ["B", "E", -1],
      ["C", "B", -2],
      ["C", "E", 5],
      ["E", "D", 3],
    ];

    const expected = {
      A: 0,
      B: 1,
      C: 3,
      D: 3,
      E: 0,
    };
    const result = bellmanFord(edges, vertices, "A");

    expect(result).toEqual(expected);
  });
});
