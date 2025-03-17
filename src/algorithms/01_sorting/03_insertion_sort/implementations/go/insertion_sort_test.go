package insertionSort

import (
	"reflect"
	"testing"
)

func TestInsertionSortReturnsCorrectResult1(t *testing.T) {
	array := []int{1, 2}
	InsertionSort(array)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}

func TestInsertionSortReturnsCorrectResult2(t *testing.T) {
	array := []int{2, 1}
	InsertionSort(array)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}

func TestInsertionSortReturnsCorrectResult3(t *testing.T) {
	array := []int{2, 1, 3}
	InsertionSort(array)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}
