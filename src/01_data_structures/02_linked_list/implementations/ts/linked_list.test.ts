import { LinkedList } from "./linked_list";

describe("createNode()", () => {
  test("Creates a linked list with a single node", async () => {
    const linkedList = new LinkedList().append(1);

    expect(linkedList.head).toEqual({
      value: 1,
      next: null,
    });
  });
});

describe("append()", () => {
  test("Appends a node into a linked list", async () => {
    const linkedList = new LinkedList().append(1).append(2);

    expect(linkedList.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    });
  });
});

describe("prepend()", () => {
  test("Prepends two nodes into a single list", async () => {
    const linkedList = new LinkedList().prepend(2).prepend(1);

    expect(linkedList.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    });
  });
});

describe("remove()", () => {
  test("Removes item from empty list return null", async () => {
    const linkedList = new LinkedList().remove((el) => el === 1);
    expect(linkedList.head).toEqual(null);
  });

  test("Removes one item from a list containing only this item", async () => {
    const linkedList = new LinkedList().append(1).remove((el) => el === 1);

    expect(linkedList.head).toEqual(null);
  });

  test("Removes first item from a linked list", async () => {
    const linkedList = new LinkedList()
      .append(1)
      .append(2)
      .append(3)
      .append(4)
      .remove((el) => el === 1);

    expect(linkedList.head).toEqual({
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    });
  });

  test("Removes second item from a linked list", async () => {
    const linkedList = new LinkedList()
      .append(1)
      .append(2)
      .append(3)
      .append(4)
      .remove((el) => el === 2);

    expect(linkedList.head).toEqual({
      value: 1,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    });
  });

  test("Removes third item from a linked list", async () => {
    const linkedList = new LinkedList()
      .append(1)
      .append(2)
      .append(3)
      .append(4)
      .remove((el) => el === 3);

    expect(linkedList.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 4,
          next: null,
        },
      },
    });
  });

  test("Removes last item from a linked list", async () => {
    const linkedList = new LinkedList()
      .append(1)
      .append(2)
      .append(3)
      .append(4)
      .remove((el) => el === 4);

    expect(linkedList.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });
  });

  test("Tries to remove non existing item from a linked list", async () => {
    const linkedList = new LinkedList()
      .append(1)
      .append(2)
      .append(3)
      .remove((el) => el === 4);

    expect(linkedList.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });
  });
});

describe("find()", () => {
  test("Finds returns false in an empty list", async () => {
    const linkedList = new LinkedList();

    const result = linkedList.find((item) => item === 1);
    expect(result).toEqual(false);
  });

  test("Finds if one item is present in a linked list", async () => {
    const linkedList = new LinkedList().append(1);

    const result = linkedList.find((item) => item === 1);
    expect(result).toEqual(true);
  });

  test("Finds if several items are present in a linked list", async () => {
    const linkedList = new LinkedList().append(1).append(2).append(3);

    const result1 = linkedList.find((item) => item === 2);
    expect(result1).toEqual(true);

    const result2 = linkedList.find((item) => item === 4);
    expect(result2).toEqual(false);
  });

  test("Tries to find within an empty list", async () => {
    const linkedList = new LinkedList();

    const result = linkedList.find((item) => item === 1);
    expect(result).toEqual(false);
  });
});
