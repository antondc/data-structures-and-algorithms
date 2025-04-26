package linkedList

import (
	"reflect"
	"testing"
)

func TestLinkedListCreate(t *testing.T) {
	var result = LinkedList[int]{}
	var expectedResult = LinkedList[int]{Head: nil}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("%v != %v", result, expectedResult)
	}
}

func TestLinkedListPrependItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Prepend(2).Prepend(1)

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 2, Next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListPrependItemToAlreadyFilledList(t *testing.T) {
	var linkedList = LinkedList[int]{Head: &Node[int]{Value: 2, Next: nil}}
	linkedList.Prepend(1)

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 2, Next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListAppendItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Prepend(1).Append(2)

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 2, Next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListAppendsToEmptyList(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1)

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: nil}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveFirstItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1).Append(2).Append(3).Append(4).Remove(func(v int) bool { return v == 1 })

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 2, Next: &Node[int]{Value: 3, Next: &Node[int]{Value: 4, Next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveSecondItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1).Append(2).Append(3).Append(4).Remove(func(v int) bool { return v == 2 })

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 3, Next: &Node[int]{Value: 4, Next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveThirdItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1).Append(2).Append(3).Append(4).Remove(func(v int) bool { return v == 3 })

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 2, Next: &Node[int]{Value: 4, Next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveLastItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1).Append(2).Append(3).Append(4).Remove(func(v int) bool { return v == 4 })

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 2, Next: &Node[int]{Value: 3, Next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveNonExistingItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1).Append(2).Append(3).Remove(func(v int) bool { return v == 4 })

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 2, Next: &Node[int]{Value: 3, Next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveItemFromEmptyList(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Remove(func(v int) bool { return v == 1 })

	var expectedResult = LinkedList[int]{Head: nil}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListFindOnlyItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1)

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: nil}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}

	result := linkedList.Find(func(v int) bool { return v == 1 })

	expectedResult2 := true
	if !reflect.DeepEqual(result, expectedResult2) {
		t.Errorf("%v != %v", result, expectedResult2)
	}
}

func TestLinkedListFindItem(t *testing.T) {
	var linkedList = LinkedList[int]{}
	linkedList.Append(1).Append(2).Append(3)

	var expectedResult = LinkedList[int]{Head: &Node[int]{Value: 1, Next: &Node[int]{Value: 2, Next: &Node[int]{Value: 3, Next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}

	result := linkedList.Find(func(v int) bool { return v == 2 })

	expectedResult2 := true
	if !reflect.DeepEqual(result, expectedResult2) {
		t.Errorf("%v != %v", result, expectedResult2)
	}
}

func TestLinkedListFindItemInEmptyList(t *testing.T) {
	var linkedList = LinkedList[int]{}
	result := linkedList.Find(func(v int) bool { return v == 2 })

	expectedResult := false
	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("%v != %v", result, expectedResult)
	}
}
