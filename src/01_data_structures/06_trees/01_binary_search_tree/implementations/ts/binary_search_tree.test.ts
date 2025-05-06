import { BinarySearchTree } from "./binary_search_tree";

describe("BinarySearchTree()", () => {
  test("BinarySearchTree is instantiated", async () => {
    const bst = new BinarySearchTree();

    expect(bst.root).toBe(null);
  });
});

describe("insert()", () => {
  test("inserts node into empty tree", async () => {
    const bst = new BinarySearchTree();
    expect(bst.root).toBe(null);

    bst.insert(1);
    expect(bst.root.value).toBe(1);
  });

  test("inserts node into tree with existing greater node value", async () => {
    const bst = new BinarySearchTree().insert(20).insert(5).insert(10);

    expect(bst.root.value).toBe(20);
    expect(bst.root.right).toBe(null);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.left.left).toBe(null);
    expect(bst.root.left.right.value).toBe(10);
    expect(bst.root.left.right.left).toBe(null);
    expect(bst.root.left.right.right).toBe(null);
  });
});
