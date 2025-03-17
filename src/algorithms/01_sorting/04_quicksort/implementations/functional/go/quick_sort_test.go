package quickSort

import (
	"reflect" 
	"testing"
)

func TestQuickSortPartitionsArray(t *testing.T) {
	data := []int{5, 4, 2, 1, 3}
	pivot_index, partitioned_array := Partition(data)
	expectedResult := 2
	expected_partitioned_array := []int{2, 1, 3, 4, 5}

	if !reflect.DeepEqual(pivot_index, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, pivot_index, expectedResult)
	}

	if !reflect.DeepEqual(partitioned_array, expected_partitioned_array) {
		t.Errorf("merge(%v) = %v; want %v", data, pivot_index, expectedResult)
	}
}

func TestQuickSortAlreadySortedArray(t *testing.T) {
	data := []int{1, 2, 3, 4}
	sorted_array := QuickSort(data)
	expectedResult := []int{1, 2, 3, 4}

	if !reflect.DeepEqual(sorted_array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, sorted_array, expectedResult)
	}
}

func TestQuickSortReversedArrays(t *testing.T) {
	data := []int{4, 3, 2, 1}
	sorted_array := QuickSort(data)
	expectedResult := []int{1, 2, 3, 4}

	if !reflect.DeepEqual(sorted_array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, sorted_array, expectedResult)
	}
}

func TestQuickSortSimpleUnsortedArrays(t *testing.T) {
	data := []int{2, 1, 3}
	sorted_array := QuickSort(data)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(sorted_array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, sorted_array, expectedResult)
	}
}

func TestQuickSortUnsortedArrays(t *testing.T) {
	data := []int{8, 3, 5, 4, 1, 7, 2, 6}
	sorted_array := QuickSort(data)
	expectedResult := []int{1, 2, 3, 4, 5, 6, 7, 8}

	if !reflect.DeepEqual(sorted_array, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, sorted_array, expectedResult)
	}
}
