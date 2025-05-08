import { Trie } from "./trie";

describe("Trie()", () => {
  test("Trie is instantiated", async () => {
    const trie = new Trie().insert("cat").insert("car").insert("cart");

    console.log(JSON.stringify(trie, null, 4));
  });
});
