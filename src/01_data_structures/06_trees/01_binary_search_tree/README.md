# Binary Search Tree (BST)

## Description

A Binary Search Tree is an **ordered** **binary** tree, where:

- The left subtree of a node contains only nodes with values **less than** the node's value.
- The right subtree of a node contains only nodes with values **greater than** the node's value.

This property enables efficient search, insertion, and deletion operations.

Binary Search Trees are commonly used in scenarios requiring sorted data access, such as symbol tables, set/map implementations and range queries.

Typically implemented with pointers —and not with arrays— as they are not always complete trees.

## Methods

- **Search:** Traverse left or right depending on comparison with the current node.
- **Insert:** Recursively insert in the left or right subtree, maintaining the BST ordering.
- **Delete:** Handle three cases: leaf, one child, or two children. There are two ways to perform the deletion:
  - **In-order successor**: replace the node with the smallest node in the right subtree.
  - **In-order predecessor**: Replace the node with the largest node in the left subtree.
- **Min Value Node:** Finds the smallest value in a subtree (used for deletion).

## Pseudocode

### Insert

Inserts a value into the tree while maintaining its ordering property.

```
INSERT(node, value):
  if node is null:
    return new Node(value)
  if value < node.value:
    node.left = INSERT(node.left, value)
  else:
    node.right = INSERT(node.right, value)
  return node
```

### Delete

Deletes a value from the tree with in-order sucessor.

```
DELETE(node, value):
  if node is null:
    return node

  if value < node.value:
    node.left = DELETE(node.left, value)

  else if value > node.value:
    node.right = DELETE(node.right, value)

  else:
    if node.left is null:
      return node.right

    if node.right is null:
      return node.left

    sucessor = MIN_VALUE_NODE(node.right)
    node.value = sucessor.value
    node.right = DELETE(node.right, sucessor.value)
  return node
```

### Min Value Node (private)

Finds the smallest value in a subtree (used for deletion)

```
MIN_VALUE_NODE(node):
  while node.left is not null:
    node = node.left
  return node
```

### Search

Searches for a value in the BST.

```
SEARCH(node, value):
  if node is null or node.value == value:
    return node
  if value < node.value:
    return SEARCH(node.left, value)
  else:
    return SEARCH(node.right, value)
```

## Characteristics

### Time Complexity:

- Best/Average Case:
  - Search: O(log n)
  - Insert: O(log n)
  - Delete: O(log n)
- Worst Case (unbalanced tree):
  - Search: O(n)
  - Insert: O(n)
  - Delete: O(n)

### Space Complexity:

- Recursive implementations may use up to O($h$) stack space, where $h$ is the height of the tree.

## Example

### Insertion

```
Insert 10 ->         10
Insert 5  ->        /  \
                   5
Insert 15 ->       /  \
                  5   15
Insert 3  ->      /
                 3
```

### Deletion

```
BST: [10, 5, 15, 3]
Delete 5:
- Node 5 has one child (3)
Resulting BST:
      10
     /  \
    3   15
```

### Searching

```
Search 15 -> found
Search 7  -> not found
```

A Binary Search Tree efficiently supports ordered data access, making it a foundational structure in many search-based algorithms and applications.
