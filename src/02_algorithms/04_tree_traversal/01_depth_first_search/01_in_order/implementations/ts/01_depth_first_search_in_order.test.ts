import { BinarySearchTree } from "../../../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";
import { depthFirstSearchInOrder } from "./01_depth_first_search_in_order";

//       20
//     /    \
//   10      30
//  /  \    /  \
// 5   15  25  35

describe("BinarySearchTree is traversed with Depth First Search", () => {
  const accumulated = [];

  const accumulate = (value: number) => {
    accumulated.push(value);
  };

  afterEach(() => {
    accumulated.length = 0;
  });
  test("Using In-Order", async () => {
    const binarySearchTree = new BinarySearchTree()
      .insert(20)
      .insert(10)
      .insert(5)
      .insert(15)
      .insert(30)
      .insert(25)
      .insert(35);

    depthFirstSearchInOrder(binarySearchTree.root, accumulate);
    expect(accumulated).toEqual([5, 10, 15, 20, 25, 30, 35]);
  });
});
