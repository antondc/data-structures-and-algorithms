package trie

type Node struct {
	Children map[string]*Node
	End      bool
}

func NewNode() *Node {
	return &Node{
		Children: make(map[string]*Node),
		End:      false,
	}
}

type Trie struct {
	Root *Node
}

func NewTrie() Trie {
	return Trie{
		Root: NewNode(),
	}
}

func (trie *Trie) Insert(word string) *Trie {
	node := trie.Root

	// Iterate word
	for _, unicode := range word {
		char := string(unicode) // Get string from unicode

		if node.Children[char] == nil { // If no character in map, create it
			node.Children[char] = NewNode()
		}
		node = node.Children[char] // Replace node with current node to traverse the tree branch
	}

	node.End = true // End of word, mark it

	return trie
}
