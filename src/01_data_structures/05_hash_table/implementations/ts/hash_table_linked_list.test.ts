import { HashTableLinkedList } from "./hash_table_linked_list";

describe("getItemIf()", () => {
  test("Gets an item that matches a callback from empty list", async () => {
    const linkedList = new HashTableLinkedList();

    const result = linkedList.getItemIf((item) => item === 1);
    expect(result).toEqual(null);
  });

  test("Gets an item that matches a callback from a list with a single item", async () => {
    const linkedList = new HashTableLinkedList().append(1);

    const result = linkedList.getItemIf((item) => item === 1);
    expect(result).toEqual(1);
  });

  test("Gets an item that matches a callback from a list with a several items", async () => {
    const linkedList = new HashTableLinkedList().prepend("a").prepend("b");

    const a = linkedList.getItemIf((item) => item === "a");
    expect(a).toEqual("a");

    const b = linkedList.getItemIf((item) => item === "b");
    expect(b).toEqual("b");
  });

  test("Gets a complex item matching a callback from a list with a several items", async () => {
    const linkedList = new HashTableLinkedList<{ key: string; value: number }>()
      .prepend({ key: "a", value: 1 })
      .prepend({ key: "b", value: 2 });

    const a = linkedList.getItemIf(
      (item: { key: string; value: number }) => item.key === "a"
    );
    expect(a).toEqual({ key: "a", value: 1 });

    const b = linkedList.getItemIf(
      (item: { key: string; value: number }) => item.key === "b"
    );
    expect(b).toEqual({ key: "b", value: 2 });
  });
});
