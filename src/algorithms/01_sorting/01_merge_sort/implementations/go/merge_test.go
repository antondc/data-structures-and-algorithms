package mergeSort

import (
	"reflect"
	"testing"
)

func TestMergeSortReturnsCorrectResult1(t *testing.T) {

	data := []int{1, 2}
	result := MergeSort(data)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}

func TestMergeSortReturnsCorrectResult2(t *testing.T) {
	data := []int{2, 1}
	result := MergeSort(data)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}

func TestMergeSortReturnsCorrectResult3(t *testing.T) {
	data := []int{2, 1, 3}
	result := MergeSort(data)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}

func TestMergeReturnsCorrectResult(t *testing.T) {
	left := []int{1, 2}
	right := []int{3, 4}
	merged := MergeAlreadySortedArrays(left, right)
	expectedResult := []int{1, 2, 3, 4}

	if !reflect.DeepEqual(merged, expectedResult) {
		t.Errorf("merge(%v, %v) = %v; want %v", left, right, merged, expectedResult)
	}
}

func TestMergeReturnsCorrectResult2(t *testing.T) {
	left := []int{3, 4}
	right := []int{1, 2}
	merged := MergeAlreadySortedArrays(left, right)
	expectedResult := []int{1, 2, 3, 4}

	if !reflect.DeepEqual(merged, expectedResult) {
		t.Errorf("merge(%v, %v) = %v; want %v", left, right, merged, expectedResult)
	}
}

func TestMergeReturnsCorrectResult3(t *testing.T) {
	left := []int{3, 4, 5}
	right := []int{1, 2}
	merged := MergeAlreadySortedArrays(left, right)
	expectedResult := []int{1, 2, 3, 4, 5}

	if !reflect.DeepEqual(merged, expectedResult) {
		t.Errorf("merge(%v, %v) = %v; want %v", left, right, merged, expectedResult)
	}
}

func TestMergeReturnsCorrectResult4(t *testing.T) {
	left := []int{3}
	right := []int{1}
	merged := MergeAlreadySortedArrays(left, right)
	expectedResult := []int{1, 3}

	if !reflect.DeepEqual(merged, expectedResult) {
		t.Errorf("merge(%v, %v) = %v; want %v", left, right, merged, expectedResult)
	}
}
