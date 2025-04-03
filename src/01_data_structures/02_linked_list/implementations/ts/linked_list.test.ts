import { append, createLinkedList, find, prepend, remove } from "./linked_list";

describe("createNode()", () => {
  test("Creates a linked list with a single node", async () => {
    const linkedList = createLinkedList(1);

    expect(linkedList).toEqual({
      value: 1,
      next: null,
    });
  });
});

describe("append()", () => {
  test("Appends a node into a linked list", async () => {
    const linkedList = createLinkedList(1);
    const appended2 = append(linkedList, 2);

    expect(appended2).toEqual({
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    });
    const appended3 = append(appended2, 3);

    expect(appended3).toEqual({
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
    const linkedList = createLinkedList(1);
    const prepended2 = prepend(linkedList, 2);

    expect(prepended2).toEqual({
      value: 2,
      next: {
        value: 1,
        next: null,
      },
    });

    const prepended3 = prepend(prepended2, 3);

    expect(prepended3).toEqual({
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
    const linkedList = createLinkedList(1);
    const appended2 = append(linkedList, 2);
    const appended3 = append(appended2, 3);

    expect(appended3).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });

    const removed1 = remove(appended3, 1);

    expect(removed1).toEqual({
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    });
  });

  test("Removes the second node from a linked list", async () => {
    const linkedList = createLinkedList(1);
    const appended2 = append(linkedList, 2);
    const appended3 = append(appended2, 3);

    expect(appended3).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });

    const removed2 = remove(appended3, 2);

    expect(removed2).toEqual({
      value: 1,
      next: {
        value: 3,
        next: null,
      },
    });
  });

  test("Removes the third node from a linked list", async () => {
    const linkedList = createLinkedList(1);
    const appended2 = append(linkedList, 2);
    const appended3 = append(appended2, 3);

    expect(appended3).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });

    const removed3 = remove(appended3, 3);

    expect(removed3).toEqual({
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
    const linkedList = createLinkedList(1);
    const appended2 = append(linkedList, 2);
    const appended3 = append(appended2, 3);

    expect(appended3).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    });

    const result1 = find(appended3, 2);
    expect(result1).toEqual(true);

    const result2 = find(appended3, 4);
    expect(result2).toEqual(false);
  });
});
