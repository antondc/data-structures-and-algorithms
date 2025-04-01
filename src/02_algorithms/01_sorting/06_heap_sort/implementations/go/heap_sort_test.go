package heapSort

import (
	"reflect"
	"testing"
)

func TestHeapSortReturnsCorrectResult1(t *testing.T) {
	array := []int{1, 2}
	HeapSort(array)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}

func TestHeapSortReturnsCorrectResult2(t *testing.T) {
	array := []int{2, 1}
	HeapSort(array)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}

func TestHeapSortReturnsCorrectResult3(t *testing.T) {
	array := []int{2, 1, 3}
	HeapSort(array)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}
