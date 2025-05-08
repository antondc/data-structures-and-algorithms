import { Trie } from "./trie";

describe("Trie()", () => {
  test("Trie is instantiated", async () => {
    const trie = new Trie();

    expect(trie).toEqual({ root: { end: false, children: {} } });
  });
});

describe("Insert()", () => {
  test("Inserts data into a trie", async () => {
    const trie = new Trie().insert("ab");

    expect(trie).toEqual({
      root: {
        end: false,
        children: {
          a: {
            end: false,
            children: {
              b: {
                end: true,
                children: {},
              },
            },
          },
        },
      },
    });
  });

  test("Inserts empty string into a trie", async () => {
    const trie = new Trie().insert("");
    expect(trie).toEqual({
      root: {
        end: true,
        children: {},
      },
    });

    trie.insert("a");
    expect(trie).toEqual({
      root: {
        end: true,
        children: {
          a: {
            end: true,
            children: {},
          },
        },
      },
    });

    trie.insert("b");
    expect(trie).toEqual({
      root: {
        end: true,
        children: {
          a: {
            end: true,
            children: {},
          },
          b: {
            end: true,
            children: {},
          },
        },
      },
    });

    trie.insert("");
    expect(trie).toEqual({
      root: {
        end: true,
        children: {
          a: {
            end: true,
            children: {},
          },
          b: {
            end: true,
            children: {},
          },
        },
      },
    });
  });
});

describe("Search()", () => {
  test("Searches a word from an empty trie", async () => {
    const trie = new Trie();
    const found = trie.search("a");

    expect(found).toBe(false);
  });

  test("Searches a single character word from a populated trie", async () => {
    const trie = new Trie().insert("a");
    const found = trie.search("a");

    expect(found).toBe(true);
  });

  test("Searches a word from a populated trie", async () => {
    const trie = new Trie().insert("ab");
    const found = trie.search("ab");

    expect(found).toBe(true);
  });

  test("Searches a word from a populated trie with several words", async () => {
    const trie = new Trie().insert("ab").insert("abc").insert("ac");

    expect(trie.search("ab")).toBe(true);
    expect(trie.search("abc")).toBe(true);
    expect(trie.search("ac")).toBe(true);
  });
});

describe("Delete()", () => {
  test("Deletes a word from an empty trie", async () => {
    const trie = new Trie().delete("abc");

    expect(trie).toEqual({
      root: {
        end: false,
        children: {},
      },
    });
  });

  test("Deletes a word from a populated trie", async () => {
    const trie = new Trie();

    expect(trie).toEqual({
      root: {
        end: false,
        children: {},
      },
    });

    trie.insert("abc");
    expect(trie).toEqual({
      root: {
        end: false,
        children: {
          a: {
            end: false,
            children: {
              b: {
                end: false,
                children: {
                  c: {
                    end: true,
                    children: {},
                  },
                },
              },
            },
          },
        },
      },
    });

    trie.delete("abc");
    expect(trie).toEqual({
      root: {
        end: false,
        children: {},
      },
    });
  });

  test("Deletes a word from a trie with a longer word", async () => {
    const trie = new Trie().insert("abc").insert("abcd");

    expect(trie).toEqual({
      root: {
        end: false,
        children: {
          a: {
            end: false,
            children: {
              b: {
                end: false,
                children: {
                  c: {
                    end: true,
                    children: {
                      d: {
                        end: true,
                        children: {},
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    trie.delete("abc");
    expect(trie).toEqual({
      root: {
        end: false,
        children: {
          a: {
            end: false,
            children: {
              b: {
                end: false,
                children: {
                  c: {
                    end: false,
                    children: {
                      d: {
                        end: true,
                        children: {},
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    trie.delete("abcd");
    expect(trie).toEqual({
      root: {
        end: false,
        children: {},
      },
    });
  });
});

describe("Autocomplete()", () => {
  test("...", async () => {
    const trie = new Trie()
      .insert("abcd")
      .insert("abce")
      .insert("abcf")
      .insert("ayxz");

    const autocomplete = trie.suggest("ab");

    expect(autocomplete).toEqual(["abcd", "abce", "abcf"]);
  });
});
