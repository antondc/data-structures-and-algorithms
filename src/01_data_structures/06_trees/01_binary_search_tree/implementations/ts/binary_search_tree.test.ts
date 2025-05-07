import { BinarySearchTree } from "./binary_search_tree";

describe("BinarySearchTree()", () => {
  test("BinarySearchTree is instantiated", async () => {
    const bst = new BinarySearchTree();

    expect(bst).toEqual({
      root: null,
    });
  });
});

describe("insert()", () => {
  test("inserts node into empty tree", async () => {
    const bst = new BinarySearchTree();

    expect(bst).toEqual({
      root: null,
    });

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

describe("search()", () => {
  test("searches node from empty tree", async () => {
    const bst = new BinarySearchTree();
    const node = bst.search(1);
    expect(node).toBeNull();
  });

  test("searches node from empty tree", async () => {
    const bst = new BinarySearchTree()
      .insert(1)
      .insert(2)
      .insert(3)
      .insert(4)
      .insert(5);

    expect(bst).toEqual({
      root: {
        value: 1,
        left: null,
        right: {
          value: 2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: {
              value: 4,
              left: null,
              right: {
                value: 5,
                left: null,
                right: null,
              },
            },
          },
        },
      },
    });

    const node2 = bst.search(2);
    expect(node2).toEqual({
      value: 2,
      left: null,
      right: {
        value: 3,
        left: null,
        right: {
          value: 4,
          left: null,
          right: {
            value: 5,
            left: null,
            right: null,
          },
        },
      },
    });

    const node5 = bst.search(5);
    expect(node5).toEqual({
      value: 5,
      left: null,
      right: null,
    });
  });
});

describe("length()", () => {
  test("Calculates length of the tree", async () => {
    const bst = new BinarySearchTree()
      .insert(1)
      .insert(2)
      .insert(3)
      .insert(4)
      .insert(5);
    const length = bst.length();

    expect(length).toBe(5);
  });
});
