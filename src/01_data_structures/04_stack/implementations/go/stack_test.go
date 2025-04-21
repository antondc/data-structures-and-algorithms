package stack

import (
	"reflect"
	"testing"
)

func TestCreatesEmptyStack(t *testing.T) {
	arrayStack := Stack[int]{}

	if !reflect.DeepEqual(arrayStack.isEmpty(), true) {
		t.Errorf("%v != %v", arrayStack.isEmpty(), true)
	}
}

func TestPushItemToEmptyStack(t *testing.T) {
	arrayStack := Stack[int]{}
	arrayStack.push(1)

	if !reflect.DeepEqual(arrayStack.isEmpty(), false) {
		t.Errorf("%v != %v", arrayStack.isEmpty(), false)
	}
}

func TestPushTwoItemsToEmptyStack(t *testing.T) {
	arrayStack := Stack[int]{}
	arrayStack.push(1).push(2)

	if !reflect.DeepEqual(arrayStack.isEmpty(), false) {
		t.Errorf("%v != %v", arrayStack.isEmpty(), false)
	}
}

func TestPopItemFromEmptyStack(t *testing.T) {
	arrayStack := Stack[int]{}
	poped, ok := arrayStack.pop()

	if !reflect.DeepEqual(arrayStack.isEmpty(), true) {
		t.Errorf("%v != %v", arrayStack.isEmpty(), true)
	}

	if !reflect.DeepEqual(poped, 0) {
		t.Errorf("%v != %v", poped, 0)
	}

	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}
}

func TestPopItemFromStack(t *testing.T) {
	arrayStack := Stack[int]{}
	arrayStack.push(1).push(2)

	firstItem, ok := arrayStack.pop()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(firstItem, 2) {
		t.Errorf("%v != %v", firstItem, 2)
	}

	secondItem, ok := arrayStack.pop()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(secondItem, 1) {
		t.Errorf("%v != %v", secondItem, 1)
	}
}

func TestReturnsLengthForEmptyStack(t *testing.T) {
	arrayStack := Stack[int]{}

	if !reflect.DeepEqual(arrayStack.length(), 0) {
		t.Errorf("%v != %v", arrayStack.length(), 0)
	}
}

func TestReturnsLengthForStack(t *testing.T) {
	arrayStack := Stack[int]{}
	arrayStack.push(1).push(2)

	arrayStack.pop()
	if !reflect.DeepEqual(arrayStack.length(), 1) {
		t.Errorf("%v != %v", arrayStack.length(), 1)
	}

	arrayStack.pop()
	if !reflect.DeepEqual(arrayStack.length(), 0) {
		t.Errorf("%v != %v", arrayStack.length(), 0)
	}

	arrayStack.pop()
	if !reflect.DeepEqual(arrayStack.length(), 0) {
		t.Errorf("%v != %v", arrayStack.length(), 0)
	}
}

func TestIsEmptyForEmptyStack(t *testing.T) {
	arrayStack := Stack[int]{}

	if !reflect.DeepEqual(arrayStack.isEmpty(), true) {
		t.Errorf("%v != %v", arrayStack.isEmpty(), true)
	}
}

func TestIsEmptyWhenStackHasValues(t *testing.T) {
	arrayStack := Stack[int]{}

	arrayStack.push(1)
	if !reflect.DeepEqual(arrayStack.isEmpty(), false) {
		t.Errorf("%v != %v", arrayStack.isEmpty(), false)
	}
}

func TestPeeks(t *testing.T) {
	arrayStack := Stack[int]{}

	result, ok := arrayStack.peek()
	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}

	if !reflect.DeepEqual(result, 0) {
		t.Errorf("%v != %v", result, 0)
	}

	arrayStack.push(1).push(2)
	firstItem, ok := arrayStack.peek()

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(firstItem, 2) {
		t.Errorf("%v != %v", firstItem, 2)
	}

	popedFirstItem, ok := arrayStack.pop()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(popedFirstItem, 2) {
		t.Errorf("%v != %v", popedFirstItem, 2)
	}

	popedSecondItem, ok := arrayStack.pop()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(popedSecondItem, 1) {
		t.Errorf("%v != %v", popedSecondItem, 1)
	}

	popedThirdItem, ok := arrayStack.pop()
	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}
	if !reflect.DeepEqual(popedThirdItem, 0) {
		t.Errorf("%v != %v", popedThirdItem, 0)
	}

	if !reflect.DeepEqual(arrayStack.isEmpty(), true) {
		t.Errorf("%v != %v", arrayStack.isEmpty(), true)
	}
}
