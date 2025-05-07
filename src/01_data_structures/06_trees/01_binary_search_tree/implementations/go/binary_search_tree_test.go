package binary_search_tree

import (
	"reflect"
	"testing"
)

func TestBinarySearchTreeIsInstantiated(t *testing.T) {
	bst := BinarySearchTree{}
	expectedResult := BinarySearchTree{Root: nil}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestInsertsNodeIntoEmptyTree(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(1)
	expectedResult := BinarySearchTree{Root: &Node{Value: 1, Left: nil, Right: nil}}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestInsertsNodeWithoutCreatingDuplicates(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(5).Insert(1).Insert(9).Insert(4).Insert(6).Insert(2).Insert(8)
	expectedResult := BinarySearchTree{Root: &Node{Value: 5, Left: &Node{Value: 1, Left: nil, Right: &Node{Value: 4, Left: &Node{Value: 2}}}, Right: &Node{Value: 9, Left: &Node{Value: 6, Right: &Node{Value: 8}}}}}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}

	bst.Insert(5).Insert(1).Insert(9).Insert(4).Insert(6).Insert(2).Insert(8)
	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}
