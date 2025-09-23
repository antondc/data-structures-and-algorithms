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
		newLeft := binarySearchTree.insertNode(node.Left, value)
		return &Node{Value: node.Value, Left: newLeft, Right: node.Right}
	} else if value > node.Value {
		newRight := binarySearchTree.insertNode(node.Right, value)
		return &Node{Value: node.Value, Left: node.Left, Right: newRight}
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
		newLeft := binarySearchTree.deleteNode(node.Left, value)
		return &Node{Value: node.Value, Left: newLeft, Right: node.Right}
	} else if value > node.Value {
		newRight := binarySearchTree.deleteNode(node.Right, value)
		return &Node{Value: node.Value, Left: node.Left, Right: newRight}
	} else {
		// Node is targer
		if node.Left == nil {
			return node.Right
		}
		if node.Right == nil {
			return node.Left
		}

		// Node has two children, traverse with in-order sucessor
		// Get in-order successor, smallest node in right subtree.
		successor := binarySearchTree.getLeftmostNode(node.Right)
		// Remove min value from subtree.
		newRight := binarySearchTree.deleteNode(node.Right, successor.Value)
		// Set target as sucessor value.
		return &Node{Value: successor.Value, Left: node.Left, Right: newRight}
	}
}

func (binarySearchTree *BinarySearchTree) getLeftmostNode(node *Node) *Node {
	if node.Left != nil {
		return binarySearchTree.getLeftmostNode(node.Left)
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
