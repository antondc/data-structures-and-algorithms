package adjacency_list

import (
	"fmt"
	"reflect"
	"testing"
)

func TestAdjacencyListInstantiation(t *testing.T) {
	graph := NewAdjacencyList()
	expected := AdjacencyList{graph: map[string][]string{}}
	fmt.Printf("\n\n%[1]T:\n%#[1]v\n\n", graph)

	if !reflect.DeepEqual(graph, expected) {
		t.Errorf("Expected %v, got %v", expected, graph)
	}
}

func TestAddVertex(t *testing.T) {
	graph := NewAdjacencyList()

	graph.AddVertex("a")
	expected1 := AdjacencyList{
		graph: map[string][]string{"a": {}},
	}

	if !reflect.DeepEqual(graph, expected1) {
		t.Errorf("Expected %v, got %v", expected1, graph)
	}

	graph.AddVertex("b")
	expected2 := AdjacencyList{
		graph: map[string][]string{"a": {}, "b": {}},
	}
	if !reflect.DeepEqual(graph, expected2) {
		t.Errorf("Expected %v, got %v", expected2, graph)
	}

	graph.AddVertex("c")
	expected3 := AdjacencyList{
		graph: map[string][]string{"a": {}, "b": {}, "c": {}},
	}
	if !reflect.DeepEqual(graph, expected3) {
		t.Errorf("Expected %v, got %v", expected3, graph)
	}
}
