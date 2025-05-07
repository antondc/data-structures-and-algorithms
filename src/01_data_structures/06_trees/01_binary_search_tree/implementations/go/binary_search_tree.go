package binary_search_tree

var DEFAULT_HASH_TABLE_SIZE = 50

type Node struct {
	Value int
	Left  *Node
	Right *Node
}

type BinarySearchTree struct {
	Root *Node
}

func (binarySearchTree *BinarySearchTree) Insert(value int) *BinarySearchTree {
	binarySearchTree.Root = binarySearchTree.insertNode(binarySearchTree.Root, value)

	return binarySearchTree
}

func (binarySearchTree BinarySearchTree) insertNode(node *Node, value int) *Node {
	if node == nil {
		return &Node{Value: value}
	}

	if value < node.Value {
		node.Left = binarySearchTree.insertNode(node.Left, value)
	} else if value > node.Value {
		node.Right = binarySearchTree.insertNode(node.Right, value)
	}

	return node
}

func (binarySearchTree *BinarySearchTree) Delete(value int) *BinarySearchTree {
	binarySearchTree.Root = binarySearchTree.deleteNode(binarySearchTree.Root, value)

	return binarySearchTree
}

func (binarySearchTree *BinarySearchTree) deleteNode(node *Node, value int) *Node {
	if node == nil {
		return node
	}
	if value < node.Value {
		node.Left = binarySearchTree.deleteNode(node.Left, value)
	} else if value > node.Value {
		node.Right = binarySearchTree.deleteNode(node.Right, value)
	} else {
		// Node is targer
		if node.Left == nil {
			return node.Right
		}
		if node.Right == nil {
			return node.Left
		}

		// Node has two children, traverse with in-order sucessor
		// Get sucessor —deepest rights child
		successor := binarySearchTree.minValueNode(node.Right)
		// Set target as sucessor value.
		node.Value = successor.Value
		// Remove min value from subtree.
		node.Right = binarySearchTree.deleteNode(node.Right, successor.Value)
	}

	return node
}

func (binarySearchTree *BinarySearchTree) minValueNode(node *Node) *Node {
	for node.Left != nil {
		node = node.Left
	}

	return node
}

func (binarySearchTree BinarySearchTree) Search(value int) *Node {
	return binarySearchTree.searchNode(binarySearchTree.Root, value)
}

func (binarySearchTree BinarySearchTree) searchNode(node *Node, value int) *Node {
	if node == nil || node.Value == value {
		return node
	}
	if value < node.Value {
		return binarySearchTree.searchNode(node.Left, value)
	} else {
		return binarySearchTree.searchNode(node.Right, value)
	}
}

func (binarySearchTree BinarySearchTree) Length() int {
	return binarySearchTree.countNodes(binarySearchTree.Root)
}

func (binarySearchTree BinarySearchTree) countNodes(node *Node) int {
	if node == nil {
		return 0
	}

	return 1 + binarySearchTree.countNodes(node.Left) + binarySearchTree.countNodes(node.Right)
}
