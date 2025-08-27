package disjoint_set

import (
	"reflect"
	"testing"
)

func TestAdjacencyListInstantiation(t *testing.T) {
	disjointSet := NewDisjointSet(3)
	expected := &DisjointSet{representatives: []int{0, 1, 2}, ranks: []int{0, 0, 0}}

	if !reflect.DeepEqual(disjointSet, expected) {
		t.Errorf("Expected %v, got %v", expected, disjointSet)
	}
}

func TestFindsItemInSet(t *testing.T) {
	disjointSet := NewDisjointSet(3)
	representative, err := disjointSet.Find(1)
	if err == nil {
		expected := 1

		if !reflect.DeepEqual(representative, expected) {
			t.Errorf("Expected %v, got %v", representative, expected)
		}
	}
}

func TestErrorsIfIndexOutOfBounds(t *testing.T) {
	disjointSet := NewDisjointSet(3)
	rep, err := disjointSet.Find(2)

	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}

	if rep != 2 {
		t.Errorf("Expected representative 2, got %v", rep)
	}
}

func TestUnionsGroupsOfGivenRepresentatives(t *testing.T) {
	disjointSet, _ := NewDisjointSet(3).Union(1, 2)

	expected := &DisjointSet{representatives: []int{0, 1, 1}, ranks: []int{0, 1, 0}}

	if !reflect.DeepEqual(disjointSet, expected) {
		t.Errorf("Expected %v, got %v", expected, disjointSet)
	}
}

func TestTwoGroupsConnected(t *testing.T) {
	disjointSet, _ := NewDisjointSet(3).Union(1, 2)
	connected, err := disjointSet.Connected(1, 2)

	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}

	if !reflect.DeepEqual(connected, true) {
		t.Errorf("Expected %v, got %v", connected, true)
	}
}

func TestConnectedReturnsErrorIfOutOfBound(t *testing.T) {
	disjointSet, _ := NewDisjointSet(3).Union(1, 2)
	connected, err := disjointSet.Connected(1, 4)

	if err == nil {
		t.Errorf("Unexpected error: %v", err)
	}

	if !reflect.DeepEqual(connected, false) {
		t.Errorf("Expected %v, got %v", connected, false)
	}
}
