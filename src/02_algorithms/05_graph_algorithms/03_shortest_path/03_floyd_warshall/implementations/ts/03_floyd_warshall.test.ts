import {
  floydWarshall,
  Graph,
  reconstructPath,
  // reconstructPath,
  Vertices,
} from "./03_floyd_warshall";

describe("Floyd Warshall algorithm", () => {
  test("Finds the cost to reach all nodes", async () => {
    //          B  →   5   →    D
    //        ↗ 
    //      4   ↑  ↘            ↑
    //    ↗
    //  A      -2      -1       3
    //    ↘
    //      3   ↑           ↘   ↑
    //        ↘
    //          C  →   5   →    E

    const vertices: Vertices<string> = ["A", "B", "C", "D", "E"];

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
    const expectedDistances = [
      [0, 1, 3, 3, 0],
      [Infinity, 0, Infinity, 2, -1],
      [Infinity, -2, 0, 0, -3],
      [Infinity, Infinity, Infinity, 0, Infinity],
      [Infinity, Infinity, Infinity, 3, 0],
    ];

    const { distances } = floydWarshall(graph, vertices);

    expect(distances).toEqual(expectedDistances);
  });
  test("Finds the cost to reach all nodes and returns paths matrix, with function to extract path", async () => {
    // ❕ Following example provided at ./img/floid_warshall_graph.png

    const vertices: Vertices<string> = ["V1", "V2", "V3", "V4", "V5"];
    const graph: Graph = [
      [0, 1, 6, 3, Infinity],
      [Infinity, 0, 3, Infinity, 4],
      [Infinity, 3, 0, Infinity, -3],
      [-2, Infinity, 3, 0, Infinity],
      [Infinity, 4, Infinity, 4, 0],
    ];

    const expectedDistances = [
      [0, 1, 4, 3, 1],
      [2, 0, 3, 4, 0],
      [-1, 0, 0, 1, -3],
      [-2, -1, 2, 0, -1],
      [2, 3, 6, 4, 0],
    ];

    const { distances, next } = floydWarshall(graph, vertices);

    const expectedNext = [
      [0, 0, 1, 0, 2],
      [3, 1, 1, 4, 2],
      [3, 0, 2, 4, 2],
      [3, 0, 1, 3, 2],
      [3, 0, 1, 4, 4],
    ];

    expect(distances).toEqual(expectedDistances);
    expect(next).toEqual(expectedNext);

    const pathV2V1 = reconstructPath("V2", "V1", next, vertices);
    expect(pathV2V1).toEqual(["V2", "V3", "V5", "V4", "V1"]);
  });
});
