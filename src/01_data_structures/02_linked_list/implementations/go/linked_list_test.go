package linkedList

import (
	"reflect"
	"testing"
)

func TestLinkedListCreate(t *testing.T) {
	result := LinkedList{}
	expectedResult := LinkedList{head: nil}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("%v != %v", result, expectedResult)
	}
}

func TestLinkedListPrependItem(t *testing.T) {
	linkedList := LinkedList{}
	linkedList.prepend(1)
	expectedResult := LinkedList{head: &Node{value: 1, next: nil}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListPrependItemToAlreadyFilledList(t *testing.T) {
	linkedList := LinkedList{head: &Node{value: 2, next: nil}}
	linkedList.prepend(1)
	expectedResult := LinkedList{head: &Node{value: 1, next: &Node{value: 2, next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListAppendItem(t *testing.T) {
	linkedList := LinkedList{}
	linkedList.prepend(1)
	linkedList.append(2)
	expectedResult := LinkedList{head: &Node{value: 1, next: &Node{value: 2, next: nil}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListAppendsToEmptyList(t *testing.T) {
	linkedList := LinkedList{}
	linkedList.append(1)
	expectedResult := LinkedList{head: &Node{value: 1, next: nil}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveItem(t *testing.T) {
	linkedList := LinkedList{}
	linkedList.append(1)
	linkedList.append(2)
	linkedList.append(3)
	expectedResult := LinkedList{head: &Node{value: 1, next: &Node{value: 2, next: &Node{value: 3, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}

	linkedList.remove(2)

	expectedResult2 := LinkedList{head: &Node{value: 1, next: &Node{value: 3, next: nil}}}
	if !reflect.DeepEqual(linkedList, expectedResult2) {
		t.Errorf("%v != %v", linkedList, expectedResult2)
	}
}

func TestLinkedListRemoveNonExistingItem(t *testing.T) {
	linkedList := LinkedList{}
	linkedList.append(1)
	linkedList.append(2)
	linkedList.append(3)
	expectedResult := LinkedList{head: &Node{value: 1, next: &Node{value: 2, next: &Node{value: 3, next: nil}}}}

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}

	linkedList.remove(4)

	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListRemoveItemFromEmptyList(t *testing.T) {
	linkedList := LinkedList{}
	linkedList.remove(2)

	expectedResult := LinkedList{head: nil}
	if !reflect.DeepEqual(linkedList, expectedResult) {
		t.Errorf("%v != %v", linkedList, expectedResult)
	}
}

func TestLinkedListFindItem(t *testing.T) {
	linkedList := LinkedList{}
	linkedList.append(1)
	linkedList.append(2)
	linkedList.append(3)
	expectedResult := LinkedList{head: &Node{value: 1, next: &Node{value: 2, next: &Node{value: 3, next: nil}}}}

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
	linkedList := LinkedList{}
	result := linkedList.find(2)

	expectedResult := false
	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("%v != %v", result, expectedResult)
	}
}
