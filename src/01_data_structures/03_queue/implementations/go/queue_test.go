package queue

import (
	"reflect"
	"testing"
)

func TestCreatesEmptyQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}

	if !reflect.DeepEqual(arrayQueue.isEmpty(), true) {
		t.Errorf("%v != %v", arrayQueue.isEmpty(), true)
	}
}

func TestEnqueueItemToEmptyQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}
	arrayQueue.enqueue(1)

	if !reflect.DeepEqual(arrayQueue.isEmpty(), false) {
		t.Errorf("%v != %v", arrayQueue.isEmpty(), false)
	}
}

func TestEnqueueTwoItemsToEmptyQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}
	arrayQueue.enqueue(1).enqueue(2)

	if !reflect.DeepEqual(arrayQueue.isEmpty(), false) {
		t.Errorf("%v != %v", arrayQueue.isEmpty(), false)
	}
}

func TestDequeueItemFromEmptyQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}
	dequeued, ok := arrayQueue.dequeue()

	if !reflect.DeepEqual(arrayQueue.isEmpty(), true) {
		t.Errorf("%v != %v", arrayQueue.isEmpty(), true)
	}

	if !reflect.DeepEqual(dequeued, 0) {
		t.Errorf("%v != %v", dequeued, 0)
	}

	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}
}

func TestDequeueItemFromQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}
	arrayQueue.enqueue(1).enqueue(2)

	firstItem, ok := arrayQueue.dequeue()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(firstItem, 1) {
		t.Errorf("%v != %v", firstItem, 1)
	}

	secondItem, ok := arrayQueue.dequeue()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(secondItem, 2) {
		t.Errorf("%v != %v", secondItem, 2)
	}
}

func TestReturnsLengthForEmptyQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}

	if !reflect.DeepEqual(arrayQueue.length(), 0) {
		t.Errorf("%v != %v", arrayQueue.length(), 0)
	}
}

func TestReturnsLengthForQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}
	arrayQueue.enqueue(1).enqueue(2)

	arrayQueue.dequeue()
	if !reflect.DeepEqual(arrayQueue.length(), 1) {
		t.Errorf("%v != %v", arrayQueue.length(), 1)
	}

	arrayQueue.dequeue()
	if !reflect.DeepEqual(arrayQueue.length(), 0) {
		t.Errorf("%v != %v", arrayQueue.length(), 0)
	}

	arrayQueue.dequeue()
	if !reflect.DeepEqual(arrayQueue.length(), 0) {
		t.Errorf("%v != %v", arrayQueue.length(), 0)
	}
}

func TestIsEmptyForEmptyQueue(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}

	if !reflect.DeepEqual(arrayQueue.isEmpty(), true) {
		t.Errorf("%v != %v", arrayQueue.isEmpty(), true)
	}
}

func TestIsEmptyWhenQueueHasValues(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}

	arrayQueue.enqueue(1)
	if !reflect.DeepEqual(arrayQueue.isEmpty(), false) {
		t.Errorf("%v != %v", arrayQueue.isEmpty(), false)
	}
}

func TestPeeks(t *testing.T) {
	arrayQueue := ArrayQueue[int]{}

	arrayQueue.enqueue(1).enqueue(2)
	firstItem := arrayQueue.peek()

	if !reflect.DeepEqual(firstItem, 1) {
		t.Errorf("%v != %v", firstItem, 1)
	}

	dequeuedFirstItem, ok := arrayQueue.dequeue()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(dequeuedFirstItem, 1) {
		t.Errorf("%v != %v", dequeuedFirstItem, 1)
	}

	dequeuedSecondItem, ok := arrayQueue.dequeue()
	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}
	if !reflect.DeepEqual(dequeuedSecondItem, 2) {
		t.Errorf("%v != %v", dequeuedSecondItem, 2)
	}

	dequeuedThirdItem, ok := arrayQueue.dequeue()
	if !reflect.DeepEqual(ok, false) {
		t.Errorf("%v != %v", ok, false)
	}
	if !reflect.DeepEqual(dequeuedThirdItem, 0) {
		t.Errorf("%v != %v", dequeuedThirdItem, 0)
	}

	if !reflect.DeepEqual(arrayQueue.isEmpty(), true) {
		t.Errorf("%v != %v", arrayQueue.isEmpty(), true)
	}
}
