package linkedList

import (
	"reflect"
	"testing"
)

func TestLinkedListCreate(t *testing.T) {
	result := LinkedList[int]{}
	expectedResult := LinkedList[int]{head: nil}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("%v != %v", result, expectedResult)
	}
}

func TestLinkedListPrependItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.prepend(2).prepend(1)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 2, next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListPrependItemToAlreadyFilledList(t *testing.T) {
	linkedList := LinkedList[int]{head: &Node[int]{value: 2, next: nil}}
	linkedList.prepend(1)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 2, next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListAppendItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.prepend(1).append(2)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 2, next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListAppendsToEmptyList(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.append(1)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: nil}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveFirstItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.append(1).append(2).append(3).append(4).remove(1)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 2, next: &Node[int]{value: 3, next: &Node[int]{value: 4, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveSecondItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.append(1).append(2).append(3).append(4).remove(2)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 3, next: &Node[int]{value: 4, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveThirdItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.append(1).append(2).append(3).append(4).remove(3)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 2, next: &Node[int]{value: 4, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveLastItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.append(1).append(2).append(3).append(4).remove(4)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 2, next: &Node[int]{value: 3, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveNonExistingItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.append(1).append(2).append(3).remove(4)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 2, next: &Node[int]{value: 3, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveItemFromEmptyList(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.remove(2)

	expectedResult := LinkedList[int]{head: nil}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListFindItem(t *testing.T) {
	linkedList := LinkedList[int]{}
	linkedList.append(1).append(2).append(3)

	expectedResult := LinkedList[int]{head: &Node[int]{value: 1, next: &Node[int]{value: 2, next: &Node[int]{value: 3, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}

	result := linkedList.find(2)

	expectedResult2 := true
	if !reflect.DeepEqual(result, expectedResult2) {
		t.Errorf("%v != %v", result, expectedResult2)
	}
}

func TestLinkedListFindItemInEmptyList(t *testing.T) {
	linkedList := LinkedList[int]{}
	result := linkedList.find(2)

	expectedResult := false
	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("%v != %v", result, expectedResult)
	}
}
