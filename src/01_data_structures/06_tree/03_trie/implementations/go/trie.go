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

func NewTrie() *Trie {
	return &Trie{
		Root: NewNode(),
	}
}

func (trie *Trie) Insert(word string) *Trie {
	node := trie.Root

	// Iterate word
	for _, unicode := range word {
		char := string(unicode) // Get string from unicode.

		if node.Children[char] == nil { // If no character in map, create it.
			node.Children[char] = NewNode()
		}
		node = node.Children[char] // Replace node with current node to traverse the tree branch.
	}

	node.End = true // End of word, mark it.

	return trie
}

func (trie *Trie) Search(word string) bool {
	node := trie.Root

	// Iterate word
	for _, unicode := range word {
		char := string(unicode)
		if node.Children[char] == nil { // If no character in map, word not present.
			return false
		}
		node = node.Children[char] // Replace node with current node to traverse the tree branch.
	}

	return node.End // If last character is marked as end, word found.
}

func (trie *Trie) Delete(word string) *Trie {
	trie.DeleteNode(trie.Root, word, 0)

	return trie
}

func (trie *Trie) DeleteNode(node *Node, word string, depth int) bool {
	if depth == len(word) {
		if node.End {
			node.End = false

			return len(node.Children) == 0
		}
		return false
	}

	char := string(word[depth])
	if _, ok := node.Children[char]; ok {
		shouldDelete := trie.DeleteNode(node.Children[char], word, depth+1)
		if shouldDelete {
			delete(node.Children, char)

			return len(node.Children) == 0 && !node.End
		}
	}

	return false
}

func (trie *Trie) Suggest(prefix string) []string {
	node := trie.Root
	for _, unicode := range prefix {
		char := string(unicode)
		if node.Children[char] == nil {
			return []string{}
		}
		node = node.Children[char]
	}

	results := []string{}
	trie.depthFirstSearch(node, prefix, &results)

	return results
}

func (trie *Trie) depthFirstSearch(node *Node, prefix string, results *[]string) {
	if node.End {
		*results = append(*results, prefix)
	}

	for char, child := range node.Children {
		trie.depthFirstSearch(child, prefix+char, results)
	}
}
