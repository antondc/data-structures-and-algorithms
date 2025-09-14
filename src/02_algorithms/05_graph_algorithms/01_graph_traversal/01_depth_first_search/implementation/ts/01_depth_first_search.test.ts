import { depthFirstSearch } from "./01_depth_first_search";

//   A —— B —— C
//    \    \
//     D —— E
//     |    |
//     F —— G —— H
//          |
//    I —— J —— K —— L

describe("Graph is traversed with Depth First Search", () => {
  const accumulated = [];

  const accumulate = (value: number) => {
    accumulated.push(value);
  };

  afterEach(() => {
    accumulated.length = 0;
  });

  test("Using In-Order", async () => {
    const graph = {
      A: ["B", "D"],
      B: ["A", "C", "E"],
      C: ["B"],
      D: ["A", "E", "F"],
      E: ["B", "D", "G"],
      F: ["D", "G"],
      G: ["E", "F", "H", "J"],
      H: ["G"],
      I: ["J"],
      J: ["I", "K", "G"],
      K: ["J", "L"],
      L: ["K"],
    };

    depthFirstSearch(graph, "A", accumulate);

    const expectedResult = [
      "A",
      "B",
      "C",
      "E",
      "D",
      "F",
      "G",
      "H",
      "J",
      "I",
      "K",
      "L",
    ];
    expect(accumulated).toEqual(expectedResult);
  });
});
