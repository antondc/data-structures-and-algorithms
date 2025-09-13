import { floydWarshall, Graph, Vertices } from "./03_floyd_warshall";

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

    // Initialize matrix G such that:
    // G[i][j] = weight of edge i→j if exists, else ∞
    // G[i][i] = 0 for all i

    //       j →
    //       A  B  C  D  E
    // i A  [0, 4, 3, ∞, ∞]
    // ↓ B  [∞, 0, ∞, 5,-1]
    //   C  [∞,-2, 0, ∞, 5]
    //   D  [∞, ∞, ∞, 0, ∞]
    //   E  [∞, ∞, ∞, 3, 0]

    const graph: Graph = [
      [0, 4, 3, Infinity, Infinity],
      [Infinity, 0, Infinity, 5, -1],
      [Infinity, -2, 0, Infinity, 5],
      [Infinity, Infinity, Infinity, 0, Infinity],
      [Infinity, Infinity, Infinity, 3, 0],
    ];

    //       j →
    //       A  B  C  D  E
    // i A  [0, 1, 3, 3, 0]
    // ↓ B  [∞, 0, ∞, 2,-1]
    //   C  [∞,-2, 0, 0, -3]
    //   D  [∞, ∞, ∞, 0, ∞]
    //   E  [∞, ∞, ∞, 3, 0]
    const expected = [
      [0, 1, 3, 3, 0],
      [Infinity, 0, Infinity, 2, -1],
      [Infinity, -2, 0, 0, -3],
      [Infinity, Infinity, Infinity, 0, Infinity],
      [Infinity, Infinity, Infinity, 3, 0],
    ];

    const result = floydWarshall(graph, vertices);

    expect(result).toEqual(expected);
  });
});
