package binary_search_tree

import (
	"reflect"
	"testing"
)

func TestBinarySearchTreeIsInstantiated(t *testing.T) {
	bst := BinarySearchTree{}
	expectedResult := BinarySearchTree{
		Root: nil,
	}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestInsertsNodeIntoEmptyTree(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(1)
	expectedResult := BinarySearchTree{
		Root: &Node{
			Value: 1,
			Left:  nil,
			Right: nil,
		},
	}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestInsertsNodeWithoutCreatingDuplicates(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(5).Insert(1).Insert(9).Insert(4).Insert(6).Insert(2).Insert(8)
	expectedResult := BinarySearchTree{
		Root: &Node{
			Value: 5,
			Left: &Node{
				Value: 1,
				Left:  nil,
				Right: &Node{
					Value: 4,
					Left: &Node{
						Value: 2,
					},
				},
			},
			Right: &Node{
				Value: 9,
				Left: &Node{
					Value: 6,
					Right: &Node{
						Value: 8,
					},
				},
			},
		},
	}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}

	bst.Insert(5).Insert(1).Insert(9).Insert(4).Insert(6).Insert(2).Insert(8)
	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestInsertsNodeInTreeWithGreaterNodeValue(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(20).Insert(5).Insert(10).Insert(25)
	expectedResult := BinarySearchTree{Root: &Node{Value: 20, Left: &Node{Value: 5, Left: nil, Right: &Node{Value: 10}}, Right: &Node{Value: 25}}}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestDeletesNodeFromEmptyTree(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Delete(20)
	expectedResult := BinarySearchTree{
		Root: nil,
	}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestDeletesNodeFromTreeWithSingleNode(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(1).Delete(1)
	expectedResult := BinarySearchTree{
		Root: nil,
	}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}
}

func TestDeletesNodeFromTreeWithSeveralNodesInOrderSucessor1(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(20).Insert(5).Insert(10).Insert(25)
	//    20
	//   /  \
	// 5     25
	//  \
	//  10

	expectedResult := BinarySearchTree{
		Root: &Node{
			Value: 20,
			Left: &Node{
				Value: 5,
				Right: &Node{
					Value: 10,
				},
			},
			Right: &Node{
				Value: 25},
		},
	}

	if !reflect.DeepEqual(bst, expectedResult) {
		t.Errorf("%v != %v", bst, expectedResult)
	}

	bst.Delete(20)
	//    25
	//   /
	// 5
	//  \
	//  10

	expectedResultAfterDelete := BinarySearchTree{
		Root: &Node{
			Value: 25,
			Left: &Node{
				Value: 5,
				Right: &Node{
					Value: 10,
				},
			},
		},
	}

	if !reflect.DeepEqual(bst, expectedResultAfterDelete) {
		t.Errorf("%v != %v", bst, expectedResultAfterDelete)
	}
}

func TestDeletesNodeFromTreeWithSeveralNodesInOrderSuccessor2(t *testing.T) {
	bst := &BinarySearchTree{}
	bst.Insert(40).Insert(30).Insert(20).Insert(10).Insert(45)
	//         40
	//        /  \
	//      30   45
	//     /
	//   20
	//  /
	// 10

	expectedBeforeDelete := &BinarySearchTree{
		Root: &Node{
			Value: 40,
			Left: &Node{
				Value: 30,
				Left: &Node{
					Value: 20,
					Left: &Node{
						Value: 10,
					},
				},
			},
			Right: &Node{
				Value: 45,
			},
		},
	}

	if !reflect.DeepEqual(bst, expectedBeforeDelete) {
		t.Errorf("Before delete: got %v, want %v", bst, expectedBeforeDelete)
	}

	bst.Delete(10)
	//         40
	//        /  \
	//      30   45
	//     /
	//   20

	expectedAfterDelete := &BinarySearchTree{
		Root: &Node{
			Value: 40,
			Left: &Node{
				Value: 30,
				Left: &Node{
					Value: 20,
				},
			},
			Right: &Node{
				Value: 45,
			},
		},
	}

	if !reflect.DeepEqual(bst, expectedAfterDelete) {
		t.Errorf("After delete: got %v, want %v", bst, expectedAfterDelete)
	}
}

func TestDeletesNodeWithTwoChildrenInOrderSuccessor(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(20).Insert(10).Insert(30).Insert(25)
	//    20
	//   /  \
	// 10    30
	//       /
	//     25

	expectedBeforeDelete := BinarySearchTree{
		Root: &Node{
			Value: 20,
			Left:  &Node{Value: 10},
			Right: &Node{
				Value: 30,
				Left:  &Node{Value: 25},
			},
		},
	}

	if !reflect.DeepEqual(bst, expectedBeforeDelete) {
		t.Errorf("Before delete:\nGot:  %+v\nWant: %+v", bst, expectedBeforeDelete)
	}

	bst.Delete(20)
	//    25
	//   /  \
	// 10    30

	expectedAfterDelete := BinarySearchTree{
		Root: &Node{
			Value: 25,
			Left:  &Node{Value: 10},
			Right: &Node{Value: 30},
		},
	}

	if !reflect.DeepEqual(bst, expectedAfterDelete) {
		t.Errorf("After delete:\nGot:  %+v\nWant: %+v", bst, expectedAfterDelete)
	}
}

func TestSearchFromEmptyTree(t *testing.T) {
	bst := BinarySearchTree{}

	result := bst.Search(1)

	if result != nil {
		t.Errorf("Expected nil, got %v", result)
	}
}

func TestSearchFromPopulatedTree(t *testing.T) {
	bst := BinarySearchTree{}
	bst.Insert(1).Insert(2).Insert(3).Insert(4).Insert(5)

	expectedTree := BinarySearchTree{
		Root: &Node{
			Value: 1,
			Right: &Node{
				Value: 2,
				Right: &Node{
					Value: 3,
					Right: &Node{
						Value: 4,
						Right: &Node{
							Value: 5,
						},
					},
				},
			},
		},
	}

	if !reflect.DeepEqual(bst, expectedTree) {
		t.Errorf("Expected tree:\n%+v\nGot:\n%+v", expectedTree, bst)
	}

	// Search for 2
	node2 := bst.Search(2)
	expectedNode2 := &Node{
		Value: 2,
		Right: &Node{
			Value: 3,
			Right: &Node{
				Value: 4,
				Right: &Node{
					Value: 5,
				},
			},
		},
	}

	if !reflect.DeepEqual(node2, expectedNode2) {
		t.Errorf("Expected node2:\n%+v\nGot:\n%+v", expectedNode2, node2)
	}

	// Search for 5
	node5 := bst.Search(5)
	expectedNode5 := &Node{
		Value: 5,
	}

	if !reflect.DeepEqual(node5, expectedNode5) {
		t.Errorf("Expected node5:\n%+v\nGot:\n%+v", expectedNode5, node5)
	}
}

func TestCalculatesLengthOfTree(t *testing.T) {
	bst := &BinarySearchTree{}
	bst.Insert(1).Insert(2).Insert(3).Insert(4).Insert(5)

	expectedLength := 5
	actualLength := bst.Length()

	if actualLength != expectedLength {
		t.Errorf("Length mismatch: got %d, want %d", actualLength, expectedLength)
	}
}
