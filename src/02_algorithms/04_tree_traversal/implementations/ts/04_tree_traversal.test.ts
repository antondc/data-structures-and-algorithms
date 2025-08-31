import { BinarySearchTree } from "../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";
import {
  breadthFirstSearch,
  dfsInOrderRecursive,
  dfsPostOrderRecursive,
  dfsPreOrderRecursive,
} from "./04_tree_traversal";

//       20
//     /    \
//   10      30
//  /  \    /  \
// 5   15  25  35

describe("Traverse algorithms have logic to accumulate values", () => {
  const accumulated = [];

  const accumulate = (value: number) => {
    accumulated.push(value);
  };

  afterEach(() => {
    accumulated.length = 0;
  });

  describe("BinarySearchTree is traversed with Depth First Search", () => {
    test("Using In-Order", async () => {
      const binarySearchTree = new BinarySearchTree()
        .insert(20)
        .insert(10)
        .insert(5)
        .insert(15)
        .insert(30)
        .insert(25)
        .insert(35);

      dfsInOrderRecursive(binarySearchTree.root, accumulate);
      expect(accumulated).toEqual([5, 10, 15, 20, 25, 30, 35]);
    });

    test("Using Pre-Order", async () => {
      const binarySearchTree = new BinarySearchTree()
        .insert(20)
        .insert(10)
        .insert(5)
        .insert(15)
        .insert(30)
        .insert(25)
        .insert(35);

      dfsPreOrderRecursive(binarySearchTree.root, accumulate);
      expect(accumulated).toEqual([20, 10, 5, 15, 30, 25, 35]);
    });

    test("Using Post-Order", async () => {
      const binarySearchTree = new BinarySearchTree()
        .insert(20)
        .insert(10)
        .insert(5)
        .insert(15)
        .insert(30)
        .insert(25)
        .insert(35);

      dfsPostOrderRecursive(binarySearchTree.root, accumulate);
      expect(accumulated).toEqual([5, 15, 10, 25, 35, 30, 20]);
    });
  });

  describe("BinarySearchTree is traversed with Breadth First Search", () => {
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
});
