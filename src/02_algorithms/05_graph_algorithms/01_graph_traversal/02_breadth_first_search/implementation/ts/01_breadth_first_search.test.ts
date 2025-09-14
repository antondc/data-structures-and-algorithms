import { breadthFirstSearch } from "./01_breadth_first_search";

//   A —— B —— C
//    \    \
//     D —— E
//     |    |
//     F —— G —— H
//          |
//    I —— J —— K —— L

describe("Graph is traversed with Breadth-First Search", () => {
  const accumulated = [];

  const accumulate = (value: number) => {
    accumulated.push(value);
  };

  afterEach(() => {
    accumulated.length = 0;
  });

  test("Traverses the graph", async () => {
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

    breadthFirstSearch(graph, "A", accumulate);

    const expectedResult = [
      "A",
      "B",
      "D",
      "C",
      "E",
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
