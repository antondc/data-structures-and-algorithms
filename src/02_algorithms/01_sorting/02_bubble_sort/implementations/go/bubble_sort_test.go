package bubbleSort

import (
	"reflect"
	"testing"
)

func TestBubbleSortReturnsCorrectResult1(t *testing.T) {
	data := []int{1, 2}
	result := BubbleSort(data)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}

func TestBubbleSortReturnsCorrectResult2(t *testing.T) {
	data := []int{2, 1}
	result := BubbleSort(data)
	expectedResult := []int{1, 2}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}

func TestBubbleSortReturnsCorrectResult3(t *testing.T) {
	data := []int{2, 1, 3}
	result := BubbleSort(data)
	expectedResult := []int{1, 2, 3}

	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("merge(%v) = %v; want %v", data, result, expectedResult)
	}
}
