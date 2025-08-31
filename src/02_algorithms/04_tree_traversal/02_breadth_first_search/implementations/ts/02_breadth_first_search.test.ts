import { BinarySearchTree } from "../../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";
import { breadthFirstSearch } from "./02_breadth_first_search";

//       20
//     /    \
//   10      30
//  /  \    /  \
// 5   15  25  35

describe("BinarySearchTree is traversed with Breadth First Search", () => {
  const accumulated = [];

  const accumulate = (value: number) => {
    accumulated.push(value);
  };

  afterEach(() => {
    accumulated.length = 0;
  });

  test("Breadth First Search returns items in correct order", async () => {
    const binarySearchTree = new BinarySearchTree()
      .insert(20)
      .insert(10)
      .insert(5)
      .insert(15)
      .insert(30)
      .insert(25)
      .insert(35);

    breadthFirstSearch(binarySearchTree.root, accumulate);
    expect(accumulated).toEqual([20, 10, 30, 5, 15, 25, 35]);
  });
});
