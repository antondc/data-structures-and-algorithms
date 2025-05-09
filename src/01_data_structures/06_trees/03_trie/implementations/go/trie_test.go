package trie

import (
	"reflect"
	"testing"
)

func TestTrieIsInstantiated(t *testing.T) {
	trie := NewTrie()

	expected := Trie{
		Root: NewNode(),
	}

	if !reflect.DeepEqual(trie, expected) {
		t.Errorf("Expected %v, got %v", expected, trie)
	}
}

func TestInsertsDataIntoTrie(t *testing.T) {
	trie := NewTrie()
	trie.Insert("ab")

	expected := Trie{
		Root: &Node{
			End: false,
			Children: map[string]*Node{
				"a": {
					End: false,
					Children: map[string]*Node{
						"b": {
							End:      true,
							Children: map[string]*Node{},
						},
					},
				},
			},
		},
	}

	if !reflect.DeepEqual(trie, expected) {
		t.Errorf("Expected %v, got %v", expected, trie)
	}
}

func TestInsertsEmptyStringIntoTrie(t *testing.T) {
	trie := NewTrie()
	trie.Insert("")

	expected1 := Trie{
		Root: &Node{
			End:      true,
			Children: map[string]*Node{},
		},
	}
	if !reflect.DeepEqual(trie, expected1) {
		t.Errorf("Expected %v, got %v", expected1, trie)
	}

	trie.Insert("a")
	trie.Insert("b")

	expected2 := Trie{
		Root: &Node{
			End: true,
			Children: map[string]*Node{
				"a": {
					End:      true,
					Children: map[string]*Node{},
				},
				"b": {
					End:      true,
					Children: map[string]*Node{},
				},
			},
		},
	}
	if !reflect.DeepEqual(trie, expected2) {
		t.Errorf("Expected %v, got %v", expected2, trie)
	}

	trie.Insert("")
	if !reflect.DeepEqual(trie, expected2) {
		t.Errorf("Expected %v, got %v", expected2, trie)
	}
}
