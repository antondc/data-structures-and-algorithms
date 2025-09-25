import { AvlTree } from "./avlTree";

describe("AvlTree()", () => {
  test("AvlTree is instantiated", async () => {
    const avl = new AvlTree();

    expect(avl).toEqual({
      root: null,
    });
  });
});

describe("insert()", () => {
  test("inserts node into empty tree", async () => {
    const avl = new AvlTree();

    expect(avl).toEqual({
      root: null,
    });

    avl.insert(1);

    expect(avl).toEqual({
      root: {
        value: 1,
        left: null,
        right: null,
        height: 1,
      },
    });
  });

  test("inserts node into a tree without creating duplicates", async () => {
    const avl = new AvlTree();

    avl.insert(5).insert(1).insert(9).insert(4).insert(6).insert(2).insert(8);
    //            5
    //          /   \
    //         2     8
    //       / \    / \
    //      1   4  6   9

    const expectedTree = {
      root: {
        value: 5,
        left: {
          value: 2,
          left: {
            value: 1,
            left: null,
            right: null,
            height: 1,
          },
          right: {
            value: 4,
            left: null,
            right: null,
            height: 1,
          },
          height: 2,
        },
        right: {
          value: 8,
          left: {
            value: 6,
            left: null,
            right: null,
            height: 1,
          },
          right: {
            value: 9,
            left: null,
            right: null,
            height: 1,
          },
          height: 2,
        },
        height: 3,
      },
    };
    expect(avl).toEqual(expectedTree);

    avl.insert(5).insert(1).insert(9).insert(4).insert(6).insert(2).insert(8);
    expect(avl).toEqual(expectedTree);
  });

  test("inserts node into tree with existing greater node value", async () => {
    const avl = new AvlTree().insert(20).insert(5).insert(10).insert(25);
    //    10
    //   /  \
    // 5     20
    //        \
    //         25

    expect(avl).toEqual({
      root: {
        value: 10,
        left: {
          value: 5,
          left: null,
          right: null,
          height: 1,
        },
        right: {
          value: 20,
          left: null,
          right: {
            value: 25,
            left: null,
            right: null,
            height: 1,
          },
          height: 2,
        },
        height: 3,
      },
    });
  });
});

describe("delete()", () => {
  test("deletes node from empty tree", async () => {
    const avl = new AvlTree().delete(1);

    expect(avl).toEqual({
      root: null,
    });
  });

  test("deletes node from tree with single node", async () => {
    const avl = new AvlTree().insert(1).delete(1);

    expect(avl).toEqual({
      root: null,
    });
  });

  test("deletes node from tree with several nodes with in-order sucessor", async () => {
    const avl = new AvlTree().insert(20).insert(5).insert(10).insert(25);
    //    10
    //   /  \
    // 5     20
    //        \
    //         25

    avl.delete(20);
    //    10
    //   /  \
    // 5     25

    expect(avl).toEqual({
      root: {
        value: 10,
        left: {
          value: 5,
          left: null,
          right: null,
          height: 1,
        },
        right: {
          value: 25,
          left: null,
          right: null,
          height: 1,
        },
        height: 2,
      },
    });
  });

  test("deletes node from tree with several nodes with in-order sucessor", async () => {
    const avl = new AvlTree()
      .insert(40)
      .insert(30)
      .insert(20)
      .insert(10)
      .insert(45);
    //         30
    //        /  \
    //      20   40
    //     /       \
    //   10        45

    expect(avl).toEqual({
      root: {
        value: 30,
        left: {
          value: 20,
          left: {
            value: 10,
            left: null,
            right: null,
            height: 1,
          },
          right: null,
          height: 2,
        },
        right: {
          value: 40,
          left: null,
          right: {
            value: 45,
            left: null,
            right: null,
            height: 1,
          },
          height: 2,
        },
        height: 3,
      },
    });

    avl.delete(10);
    //         30
    //        /  \
    //      20   40
    //             \
    //             45

    expect(avl).toEqual({
      root: {
        value: 30,
        left: {
          value: 20,
          left: null,
          right: null,
          height: 1,
        },
        right: {
          value: 40,
          left: null,
          right: {
            value: 45,
            left: null,
            right: null,
            height: 1,
          },
          height: 2,
        },
        height: 3,
      },
    });
  });

  test("deletes a node with two children", () => {
    const avl = new AvlTree().insert(20).insert(10).insert(30).insert(25);
    //    20
    //   /  \
    // 10    30
    //      /
    //    25

    avl.delete(20);
    //    25
    //   /  \
    // 10    30

    expect(avl).toEqual({
      root: {
        value: 25,
        left: {
          value: 10,
          left: null,
          right: null,
          height: 1,
        },
        right: {
          value: 30,
          left: null,
          right: null,
          height: 1,
        },
        height: 2,
      },
    });
  });
});

describe("search()", () => {
  test("searches node from empty tree", async () => {
    const avl = new AvlTree();
    const node = avl.search(1);
    expect(node).toBeNull();
  });

  test("searches node from populated tree", async () => {
    const avl = new AvlTree().insert(1).insert(2).insert(3).insert(4).insert(5);
    //     2
    //   /  \
    // 1     4
    //     /  \
    //    3    5

    expect(avl).toEqual({
      root: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null,
          height: 1,
        },
        right: {
          value: 4,
          left: {
            value: 3,
            left: null,
            right: null,
            height: 1,
          },
          right: {
            value: 5,
            left: null,
            right: null,
            height: 1,
          },
          height: 2,
        },
        height: 3,
      },
    });

    const node4 = avl.search(4);
    //     4
    //   /  \
    //  3    5
    expect(node4).toEqual({
      value: 4,
      left: { value: 3, left: null, right: null, height: 1 },
      right: { value: 5, left: null, right: null, height: 1 },
      height: 2,
    });

    const node5 = avl.search(5);
    //  5
    expect(node5).toEqual({ value: 5, left: null, right: null, height: 1 });
  });
});

describe("length()", () => {
  test("Calculates length of the tree", async () => {
    const avl = new AvlTree().insert(1).insert(2).insert(3).insert(4).insert(5);
    const length = avl.length();

    expect(length).toBe(5);
  });
});
