import { LinkedList } from "./linked_list";

describe("createNode()", () => {
  test("Creates a linked list with a single node", async () => {
    const linkedList = new LinkedList(1);

    expect(linkedList.head).toEqual({
      value: 1,
      next: null,
    });
  });
});

describe("append()", () => {
  test("Appends a node into a linked list", async () => {
    const linkedList = new LinkedList(1).append(2);

    expect(linkedList.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    });

    const appended = linkedList.append(3);

    expect(appended.head).toEqual({
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

describe("prepend()", () => {
  test("Prepends a node into a single list", async () => {
    const linkedList = new LinkedList(1).prepend(2);

    expect(linkedList.head).toEqual({
      value: 2,
      next: {
        value: 1,
        next: null,
      },
    });

    const prepended = linkedList.prepend(3);
    expect(prepended.head).toEqual({
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        },
      },
    });
  });
});

describe("remove()", () => {
  test("Removes the first node from a linked list", async () => {
    const linkedList = new LinkedList(1).append(2).append(3);
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

    const removed = linkedList.remove(1);

    expect(removed.head).toEqual({
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    });
  });

  test("Removes the second node from a linked list", async () => {
    const linkedList = new LinkedList(1).append(2).append(3);

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

    const removed = linkedList.remove(2);

    expect(removed.head).toEqual({
      value: 1,
      next: {
        value: 3,
        next: null,
      },
    });
  });

  test("Removes the third node from a linked list", async () => {
    const linkedList = new LinkedList(1).append(2).append(3);

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

    const removed = linkedList.remove(3);
    expect(removed.head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    });
  });
});

describe("find()", () => {
  test("Finds if at least one item is present in a linked list", async () => {
    const linkedList = new LinkedList(1).append(2).append(3);

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

    const result1 = linkedList.find(2);
    expect(result1).toEqual(true);

    const result2 = linkedList.find(4);
    expect(result2).toEqual(false);
  });
});
