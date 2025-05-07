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

func (bst *BinarySearchTree) Insert(value int) *BinarySearchTree {
	bst.Root = bst.insertNode(bst.Root, value)

	return bst
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
