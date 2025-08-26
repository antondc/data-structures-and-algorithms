package sum_array_items

import (
	"reflect"
	"testing"
)

func TestSumArrayItems(t *testing.T) {
	array := []int{2, 4, 6}
	result := SumArrayItems(array)
	expected := 12

	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, got %v", result, expected)
	}
}
