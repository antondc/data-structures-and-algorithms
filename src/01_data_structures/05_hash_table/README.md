# Queue

Dynamic key-value data structure that allows efficient storage and retrieval of data via keys using a hashing function.

Typically implemented with an array internally, where a hash function maps keys to array indices. In case of collisions (when multiple keys hash to the same index), various resolution strategies like chaining (linked lists at each index) or open addressing are used.

## Pseudocode

```
CREATE_HASH_TABLE ()
  storage = array of fixed size
```

```
// Private
_HASH (key)
  convert key to numeric index
  return index within array bounds
```

```
SET (key, value)
  index = HASH(key)
  if storage[index] is empty
    create bucket (list)
  add (key, value) to bucket
```

```
GET (key)
  index = HASH(key)
  search bucket at storage[index] for key
  return value if found
```

```
REMOVE (key)
  index = HASH(key)
  search bucket at storage[index] for key
  remove key-value pair if found
```

## Explanation

A hash table has three core operations:

- Set: adds or updates a key-value pair.
- Get: retrieves the value for a given key.
- Remove: deletes a key-value pair.

### Hash functions

Hash tables use a hash function to convert a key into an index.
These are functions that coverts inputs of any length into a fixed size string using a mathematical equation. The output of a hash function has to be unique, and the same input should always produce the same hashed output.
There are many types of Hash Functions such as MD2, CRC23, SHA-1, etc.

### Collisions

Resolves collisions through strategies like chaining —linked lists at each index— or open addressing —linear or quadratic probing—.

## Characteristics

Hash tables offer near-constant time performance for basic operations on average. Performance depends on the quality of the hash function and how well collisions are handled. Worst-case time can degrade if many collisions occur.

### Operations

| Operation | Time Complexity (Average) | Time Complexity (Worst) |
| --------- | ------------------------- | ----------------------- |
| Set       | O(1)                      | O(n)                    |
| Get       | O(1)                      | O(n)                    |
| Remove    | O(1)                      | O(n)                    |
