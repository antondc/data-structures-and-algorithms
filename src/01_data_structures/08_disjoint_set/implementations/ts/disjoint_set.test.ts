import { DisjointSet } from "./disjoint_set";

describe("DisjointSet()", () => {
  test("Is instantiated", async () => {
    const set = new DisjointSet(8);
    console.log("set: ", set);

    set.union(2, 5).union(2, 7);
    console.log("set: ", set);

    set.union(1, 3);
    console.log("set: ", set);

    set.union(1, 2);
    console.log("set: ", set);
  });
});

describe("Find()", () => {
  test("Finds an item in the set", async () => {
    const set = new DisjointSet(3);
    const representative = set.find(1);

    expect(representative).toBe(1);
  });

  test("Throws if item is out of bound", async () => {
    const set = new DisjointSet(3);

    expect(() => set.find(3)).toThrow();
  });
});

describe("Union()", () => {
  test("Unions groups of given representatives", async () => {
    const set = new DisjointSet(3);
    set.union(1, 2);

    expect(set).toEqual({
      representatives: [0, 1, 1],
      ranks: [0, 1, 0],
    });
  });

  test("Throws if one or both representatives are out of bound", async () => {
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
