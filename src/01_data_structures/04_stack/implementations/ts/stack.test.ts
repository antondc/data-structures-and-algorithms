import { Stack } from "./stack";

describe("new Stack()", () => {
  test("Creates a queue", async () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });
});

describe("push()", () => {
  test("Enqueue an item to an empty queue", async () => {
    const stack = new Stack();

    const stackWithItem = stack.push(1);
    expect(stackWithItem.isEmpty()).toEqual(false);
  });

  test("Enqueue two items to an empty queue", async () => {
    const stack = new Stack();

    const stackWithItem = stack.push(1).push(2);
    expect(stackWithItem.isEmpty()).toEqual(false);
  });
});

describe("pop()", () => {
  test("pop an item from an empty queue", async () => {
    const stack = new Stack();

    const result = stack.pop();
    expect(result).toEqual(null);
  });

  test("pop an item from a queue", async () => {
    const stack = new Stack().push(1).push(2);

    const firstToLeave = stack.pop();
    expect(firstToLeave).toEqual(2);
    const secondToLeave = stack.pop();
    expect(secondToLeave).toEqual(1);
  });
});

describe("length()", () => {
  test("Returns correct length when queue is empty", async () => {
    const stack = new Stack();

    expect(stack.length()).toEqual(0);
  });

  test("Returns correct length when queue has items", async () => {
    const stack = new Stack().push(1).push(2);
    stack.pop();
    expect(stack.length()).toEqual(1);
    stack.pop();
    expect(stack.length()).toEqual(0);
    stack.pop();
    expect(stack.length()).toEqual(0);
  });
});

describe("isEmpty()", () => {
  test("Returns correct value when queue is empty", async () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toEqual(true);
  });

  test("Returns correct value when queue has values", async () => {
    const stack = new Stack().push(1);

    expect(stack.isEmpty()).toEqual(false);
  });
});

describe("peek()", () => {
  const stack = new Stack();

  test("Peek returns null if stack is empty", async () => {
    const noItem = stack.peek();
    expect(noItem).toEqual(null);
  });

  test("Returns last item without removing it", async () => {
    stack.push(1).push(2);

    const lastItem = stack.peek();
    expect(lastItem).toEqual(2);
  });
});
