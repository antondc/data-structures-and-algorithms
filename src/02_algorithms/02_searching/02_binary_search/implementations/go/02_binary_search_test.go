package binarySearch

import (
	"fmt"
	"reflect"
	"testing"
)

func TestBinarySearchReturnsCorrectResult1(t *testing.T) {

	data := []int{1, 2, 3, 4, 5}
	result := BinarySearch(data, 4)
	expectedResult := 4
	fmt.Printf("\n\nResult : %d\n\n", result)

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}
