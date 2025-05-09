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

func TestSearchEmptyTrie(t *testing.T) {
	trie := NewTrie()
	found := trie.Search("a")

	if !reflect.DeepEqual(found, false) {
		t.Errorf("Expected %v, got %v", found, false)
	}
}

func TestSearchSingleCharacter(t *testing.T) {
	trie := NewTrie()
	trie.Insert("a")
	found := trie.Search("a")

	if !reflect.DeepEqual(found, true) {
		t.Errorf("Expected %v, got %v", found, true)
	}
}

func TestSearchMultipleCharacter(t *testing.T) {
	trie := NewTrie()
	trie.Insert("ab")
	found := trie.Search("ab")

	if !reflect.DeepEqual(found, true) {
		t.Errorf("Expected %v, got %v", found, true)
	}
}

func TestSearchMultipleCharacterSeveralWords(t *testing.T) {
	trie := NewTrie()
	trie.Insert("ab").Insert("ab").Insert("abc").Insert("ac")

	foundAb := trie.Search("ab")
	if !reflect.DeepEqual(foundAb, true) {
		t.Errorf("Expected %v, got %v", foundAb, true)
	}

	foundAbc := trie.Search("abc")
	if !reflect.DeepEqual(foundAbc, true) {
		t.Errorf("Expected %v, got %v", foundAbc, true)
	}

	foundAc := trie.Search("ac")
	if !reflect.DeepEqual(foundAc, true) {
		t.Errorf("Expected %v, got %v", foundAc, true)
	}
}
