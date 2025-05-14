import { DisjointSet } from "./disjoint_set";

describe("DisjointSet()", () => {
  test("Is instantiated", async () => {
    const set = new DisjointSet(3);

    expect(set).toEqual({
      representatives: [0, 1, 2],
      rank: [0, 0, 0],
    });
  });
});

describe("Find()", () => {
  test("Finds an item in the set", async () => {
    const set = new DisjointSet(3);
    const item = set.find(1);

    expect(item).toBe(1);
  });

  test("Throws if item is out of bound", async () => {
    const set = new DisjointSet(3);

    expect(() => set.find(3)).toThrow();
  });
});

describe("Union()", () => {
  test("Unions an item in the set", async () => {
    const set = new DisjointSet(3);
    set.union(1, 2);

    expect(set).toEqual({
      representatives: [0, 1, 1],
      rank: [0, 1, 0],
    });
  });

  test("Throws if one or both items are out of bound", async () => {
    const set = new DisjointSet(3);

    expect(() => set.union(1, 3)).toThrow();
  });
});

describe("Connected()", () => {
  test("Checks if two items are connected", async () => {
    const set = new DisjointSet(3);
    set.union(1, 2);

    const connected = set.connected(1, 2);

    expect(connected).toBe(true);
  });

  test("Throws if one or both items are out of bound", async () => {
    const set = new DisjointSet(3);
    set.union(1, 2);

    expect(() => set.connected(1, 4)).toThrow();
  });
});
