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

    expect(bst).toEqual({
      root: {
        value: 1,
        left: null,
        right: null,
      },
    });
  });

  test("inserts node into tree with existing greater node value", async () => {
    const bst = new BinarySearchTree()
      .insert(20)
      .insert(5)
      .insert(10)
      .insert(25);

    //    20
    //   /  \
    // 5     25
    //  \
    //  10

    expect(bst).toEqual({
      root: {
        value: 20,
        left: {
          value: 5,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
        right: {
          value: 25,
          left: null,
          right: null,
        },
      },
    });
  });
});

describe("delete()", () => {
  test("deletes node from empty tree", async () => {
    const bst = new BinarySearchTree().delete(1);

    expect(bst).toEqual({
      root: null,
    });
  });

  test("deletes node from tree with single node", async () => {
    const bst = new BinarySearchTree().insert(1).delete(1);

    expect(bst).toEqual({
      root: null,
    });
  });

  test("deletes node from tree with several nodes with in-order sucessor", async () => {
    const bst = new BinarySearchTree()
      .insert(20)
      .insert(5)
      .insert(10)
      .insert(25);
    //    20
    //   /  \
    // 5     25
    //  \
    //  10

    bst.delete(20);
    //    25
    //   /
    // 5
    //  \
    //  10

    expect(bst).toEqual({
      root: {
        value: 25,
        left: {
          value: 5,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
        right: null,
      },
    });
  });
  test("deletes node from tree with several nodes with in-order sucessor", async () => {
    const bst = new BinarySearchTree()
      .insert(40)
      .insert(30)
      .insert(20)
      .insert(10)
      .insert(45);
    //         40
    //        /  \
    //      30   45
    //     /
    //   20
    //  /
    // 10

    expect(bst).toEqual({
      root: {
        value: 40,
        left: {
          value: 30,
          left: {
            value: 20,
            left: {
              value: 10,
              left: null,
              right: null,
            },
            right: null,
          },
          right: null,
        },
        right: {
          value: 45,
          left: null,
          right: null,
        },
      },
    });

    bst.delete(10);
    //         40
    //        /  \
    //      30   45
    //     /
    //   20

    expect(bst).toEqual({
      root: {
        value: 40,
        left: {
          value: 30,
          left: {
            value: 20,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          value: 45,
          left: null,
          right: null,
        },
      },
    });
  });

  test("deletes a node with two children", () => {
    const bst = new BinarySearchTree()
      .insert(20)
      .insert(10)
      .insert(30)
      .insert(25);
    //    20
    //   /  \
    // 10    30
    //      /
    //    25

    bst.delete(20);
    //    25
    //   /  \
    // 10    30

    expect(bst).toEqual({
      root: {
        value: 25,
        left: {
          value: 10,
          left: null,
          right: null,
        },
        right: {
          value: 30,
          left: null,
          right: null,
        },
      },
    });
  });
});
