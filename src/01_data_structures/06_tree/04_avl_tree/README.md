# Adelson-Velsky and Landis Tree (AVL Tree)

## Description

Self-balancing Binary Search Tree (BST) where the balance factor (difference in height between the left and right subtree) of any node is at most 1.

This property ensures that the tree remains approximately balanced at all times, guaranteeing O(log n) time complexity for search, insert, and delete operations.

Each node stores an additional piece of information: its height.

## Methods

- **Search:** Same as in a regular BST (O(log n) due to balanced height).
- **Insert:** Perform normal BST insert, then backtrack and rotate to maintain balance.
- **Delete:** Perform normal BST delete, then backtrack and rotate to maintain balance.
- **Rotations:** Used to rebalance the tree:
  - **Left Rotation (LL)**
  - **Right Rotation (RR)**
  - **Left-Right Rotation (LR)**
  - **Right-Left Rotation (RL)**
- **Balance Factor:** `height(left subtree) - height(right subtree)`
- **Update Height:** After any modification, recalculate the node's height.

## Pseudocode

### Insert

Inserts a value and rebalances the tree.

    INSERT(node, value):
      if node is null:
        return new Node(value)

      if value < node.value:
        node.left = INSERT(node.left, value)
      else:
        node.right = INSERT(node.right, value)

      update node.height = 1 + max(height(node.left), height(node.right))
      balance = BALANCE_FACTOR(node)

      if balance > 1 and value < node.left.value:
        return RIGHT_ROTATE(node)       # Left Left Case

      if balance < -1 and value > node.right.value:
        return LEFT_ROTATE(node)        # Right Right Case

      if balance > 1 and value > node.left.value:
        node.left = LEFT_ROTATE(node.left)
        return RIGHT_ROTATE(node)       # Left Right Case

      if balance < -1 and value < node.right.value:
        node.right = RIGHT_ROTATE(node.right)
        return LEFT_ROTATE(node)        # Right Left Case

      return node

### Delete

Deletes a node and rebalances the tree.

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
        else if node.right is null:
          return node.left

        successor = MIN_VALUE_NODE(node.right)
        node.value = successor.value
        node.right = DELETE(node.right, successor.value)

      update node.height = 1 + max(height(node.left), height(node.right))
      balance = BALANCE_FACTOR(node)

      if balance > 1 and BALANCE_FACTOR(node.left) >= 0:
        return RIGHT_ROTATE(node)       # Left Left Case

      if balance > 1 and BALANCE_FACTOR(node.left) < 0:
        node.left = LEFT_ROTATE(node.left)
        return RIGHT_ROTATE(node)       # Left Right Case

      if balance < -1 and BALANCE_FACTOR(node.right) <= 0:
        return LEFT_ROTATE(node)        # Right Right Case

      if balance < -1 and BALANCE_FACTOR(node.right) > 0:
        node.right = RIGHT_ROTATE(node.right)
        return LEFT_ROTATE(node)        # Right Left Case

      return node

### Rotations

#### Right Rotation (for Left-Heavy Subtree)

    RIGHT_ROTATE(y):
      x = y.left
      T2 = x.right

      x.right = y
      y.left = T2

      update y.height
      update x.height

      return x

#### Left Rotation (for Right-Heavy Subtree)

    LEFT_ROTATE(x):
      y = x.right
      T2 = y.left

      y.left = x
      x.right = T2

      update x.height
      update y.height

      return y

### Height and Balance Factor

    HEIGHT(node):
      if node is null:
        return -1
      return node.height

    BALANCE_FACTOR(node):
      return HEIGHT(node.left) - HEIGHT(node.right)

### Min Value Node (for deletion)

    MIN_VALUE_NODE(node):
      if node.left is not null:
        return MIN_VALUE_NODE(node.left)
      else:
        return node

### Search

Same as in BST.

    SEARCH(node, value):
      if node is null or node.value == value:
        return node
      if value < node.value:
        return SEARCH(node.left, value)
      else:
        return SEARCH(node.right, value)

## Characteristics

### Time Complexity:

| Operation | Time Complexity |
| --------- | --------------- |
| Search    | O(log n)        |
| Insert    | O(log n)        |
| Delete    | O(log n)        |

### Space Complexity:

- O(n) for storage.
- O(h) for recursion stack in worst case (h ≈ log n).

## Example

### Insertion

#### Insert 10, 20, 30

**Before AVL balancing:**

    10
      \
      20
        \
        30

**Right Right (RR) case → Left Rotation at 10:**

       20
      /  \
    10    30

#### Insert 30, 20, 10

**Before AVL balancing:**

          30
         /
       20
      /
    10

**Left Left (LL) case → Right Rotation at 30:**

       20
      /  \
    10    30

#### Insert 30, 10, 20

**Before AVL balancing:**

      30
      /
    10
      \
      20

**Left Right (LR) case → Left Rotation at 10, then Right Rotation at 30:**

       20
      /  \
    10    30

#### Insert 10, 30, 20

**Before AVL balancing:**

    10
      \
      30
      /
    20

**Right Left (RL) case → Right Rotation at 30, then Left Rotation at 10:**

      20
     / \
    10  30

### Insertion (causing rotations)

Insert in order: 10, 20, 30

Without AVL balancing:

    10
      \
      20
        \
        30

Becomes right-heavy → triggers **Left Rotation**:

       20
      /  \
    10    30

Insert: 30, 20, 10 → Left-heavy → triggers **Right Rotation**:

       20
      /  \
    10    30

Insert: 30, 10, 20 → Triggers **Left-Right Rotation**:

        20
       /  \
     10    30

## Summary

- AVL trees maintain balance after every insertion or deletion.
- They provide guaranteed logarithmic performance.
- Used in applications where fast lookups, inserts, and deletions are essential, such as:
  - Databases
  - Indexing systems
  - Priority queues (as part of more complex structures)
