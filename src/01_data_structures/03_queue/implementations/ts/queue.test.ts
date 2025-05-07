import { ArrayQueue } from "./queue";

describe("new ArrayQueue()", () => {
  test("Creates a queue", async () => {
    const arrayQueue = new ArrayQueue();
    expect(arrayQueue.isEmpty()).toEqual(true);
  });
});

describe("enqueue()", () => {
  test("Enqueue an item to an empty queue", async () => {
    const arrayQueue = new ArrayQueue();

    const arrayQueueWithItem = arrayQueue.enqueue(1);
    expect(arrayQueueWithItem.isEmpty()).toEqual(false);
  });

  test("Enqueue two items to an empty queue", async () => {
    const arrayQueue = new ArrayQueue();

    const arrayQueueWithItem = arrayQueue.enqueue(1).enqueue(2);
    expect(arrayQueueWithItem.isEmpty()).toEqual(false);
  });
});

describe("dequeue()", () => {
  test("dequeue an item from an empty queue", async () => {
    const arrayQueue = new ArrayQueue();

    const result = arrayQueue.dequeue();
    expect(result).toBeNull();
  });

  test("dequeue an item from a queue", async () => {
    const arrayQueue = new ArrayQueue().enqueue(1).enqueue(2);

    const firstItem = arrayQueue.dequeue();
    expect(firstItem).toEqual(1);
    const secondItem = arrayQueue.dequeue();
    expect(secondItem).toEqual(2);
  });
});

describe("length()", () => {
  test("Returns correct length when queue is empty", async () => {
    const arrayQueue = new ArrayQueue();

    expect(arrayQueue.length()).toEqual(0);
  });

  test("Returns correct length when queue has items", async () => {
    const arrayQueue = new ArrayQueue().enqueue(1).enqueue(2);
    arrayQueue.dequeue();
    expect(arrayQueue.length()).toEqual(1);
    arrayQueue.dequeue();
    expect(arrayQueue.length()).toEqual(0);
    arrayQueue.dequeue();
    expect(arrayQueue.length()).toEqual(0);
  });
});

describe("isEmpty()", () => {
  test("Returns correct value when queue is empty", async () => {
    const arrayQueue = new ArrayQueue();

    expect(arrayQueue.isEmpty()).toEqual(true);
  });

  test("Returns correct value when queue has values", async () => {
    const arrayQueue = new ArrayQueue().enqueue(1);

    expect(arrayQueue.isEmpty()).toEqual(false);
  });
});

describe("peek()", () => {
  test("Returns first item without removing it", async () => {
    const arrayQueue = new ArrayQueue().enqueue(1).enqueue(2);

    const firstItem = arrayQueue.peek();
    expect(firstItem).toEqual(1);

    const dequeuedFirstItem = arrayQueue.dequeue();
    expect(dequeuedFirstItem).toEqual(1);
    const dequeuedSecondItem = arrayQueue.dequeue();
    expect(dequeuedSecondItem).toEqual(2);

    expect(arrayQueue.isEmpty()).toEqual(true);
  });
});
