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

// test("inserts node into a tree without creating duplicates", async () => {
// 	const bst = new BinarySearchTree();
// 	const expectedTree = {
// 		root: {
// 			value: 5,
// 			left: {
// 				value: 1,
// 				left: null,
// 				right: {
// 					value: 4,
// 					left: {
// 						value: 2,
// 						left: null,
// 						right: null,
// 					},
// 					right: null,
// 				},
// 			},
// 			right: {
// 				value: 9,
// 				left: {
// 					value: 6,
// 					left: null,
// 					right: {
// 						value: 8,
// 						left: null,
// 						right: null,
// 					},
// 				},
// 				right: null,
// 			},
// 		},
// 	};
// 	bst.insert(5).insert(1).insert(9).insert(4).insert(6).insert(2).insert(8);
// 	//     5
// 	//   /   \
// 	//  1     9
// 	//  \    /
// 	//   4  6
// 	//  /    \
// 	// 2      8
// 	expect(bst).toEqual(expectedTree);

// 	bst.insert(5).insert(1).insert(9).insert(4).insert(6).insert(2).insert(8);
// 	expect(bst).toEqual(expectedTree);
// });
