package insertionSort

import (
	"reflect"
	"testing"
)

func TestInsertionSortReturnsCorrectResult1(t *testing.T) {
	data := []int{1, 2}
	result := InsertionSort(data)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}

func TestInsertionSortReturnsCorrectResult2(t *testing.T) {
	data := []int{2, 1}
	result := InsertionSort(data)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}

func TestInsertionSortReturnsCorrectResult3(t *testing.T) {
	data := []int{2, 1, 3}
	result := InsertionSort(data)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}
