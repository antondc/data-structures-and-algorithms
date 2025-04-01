package selectionSort

import (
	"reflect"
	"testing"
)

func TestSelectionSortReturnsCorrectResult1(t *testing.T) {
	array := []int{1, 2}
	SelectionSort(array)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}

func TestSelectionSortReturnsCorrectResult2(t *testing.T) {
	array := []int{2, 1}
	SelectionSort(array)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}

func TestSelectionSortReturnsCorrectResult3(t *testing.T) {
	array := []int{2, 1, 3}
	SelectionSort(array)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", array, array, expectedResult)
	}
}
