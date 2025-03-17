package quickSort

import (
	"reflect"
	"testing"
)

func TestQuickSortPartitionsArray(t *testing.T) {
	data := []int{5, 4, 2, 1, 3}
	pivot_index := Partition(data)
	expectedResult := 2

	if !reflect.DeepEqual(pivot_index, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, pivot_index, expectedResult)
	}
}

func TestQuickSortAlreadySortedArray(t *testing.T) {
	data := []int{1, 2, 3, 4}
	QuickSort(data)
	expectedResult := []int{1, 2, 3, 4}

	if !reflect.DeepEqual(data, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, data, expectedResult)
	}
}

func TestQuickSortReversedArrays(t *testing.T) {
	data := []int{4, 3, 2, 1}
	QuickSort(data)
	expectedResult := []int{1, 2, 3, 4}

	if !reflect.DeepEqual(data, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, data, expectedResult)
	}
}

func TestQuickSortSimpleUnsortedArrays(t *testing.T) {
	data := []int{2, 1, 3}
	QuickSort(data)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(data, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, data, expectedResult)
	}
}

func TestQuickSortUnsortedArrays(t *testing.T) {
	data := []int{8, 3, 5, 4, 1, 7, 2, 6}
	QuickSort(data)
	expectedResult := []int{1, 2, 3, 4, 5, 6, 7, 8}

	if !reflect.DeepEqual(data, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, data, expectedResult)
	}
}
