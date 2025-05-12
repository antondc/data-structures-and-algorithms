package adjacency_list

import (
	"reflect"
	"testing"
)

func TestAdjacencyListInstantiation(t *testing.T) {
	graph := NewAdjacencyList()
	expected := &AdjacencyList{graph: map[string][]string{}}

	if !reflect.DeepEqual(graph, expected) {
		t.Errorf("Expected %v, got %v", expected, graph)
	}
}

func TestAddVertex(t *testing.T) {
	graph := NewAdjacencyList()

	graph.AddVertex("a")
	expected1 := &AdjacencyList{
		graph: map[string][]string{"a": {}},
	}

	if !reflect.DeepEqual(graph, expected1) {
		t.Errorf("Expected %v, got %v", expected1, graph)
	}

	graph.AddVertex("b")
	expected2 := &AdjacencyList{
		graph: map[string][]string{"a": {}, "b": {}},
	}
	if !reflect.DeepEqual(graph, expected2) {
		t.Errorf("Expected %v, got %v", expected2, graph)
	}

	graph.AddVertex("c")
	expected3 := &AdjacencyList{
		graph: map[string][]string{"a": {}, "b": {}, "c": {}},
	}
	if !reflect.DeepEqual(graph, expected3) {
		t.Errorf("Expected %v, got %v", expected3, graph)
	}
}

func TestAddEdge(t *testing.T) {
	t.Run("Adds an undirected edge", func(t *testing.T) {
		graph := NewAdjacencyList()
		graph.AddVertex("a").AddVertex("b")
		graph.AddEdge("a", "b", EdgeOptions{})

		expected := &AdjacencyList{
			graph: map[string][]string{
				"a": {"b"},
				"b": {"a"},
			},
		}

		if !reflect.DeepEqual(graph, expected) {
			t.Errorf("Expected %v, got %v", expected, graph)
		}
	})

	t.Run("Adds a directed edge", func(t *testing.T) {
		graph := NewAdjacencyList()
		graph.AddVertex("a").AddVertex("b")
		graph.AddEdge("a", "b", EdgeOptions{Directed: true})

		expected := &AdjacencyList{
			graph: map[string][]string{
				"a": {"b"},
				"b": {},
			},
		}

		if !reflect.DeepEqual(graph, expected) {
			t.Errorf("Expected %v, got %v", expected, graph)
		}
	})

	t.Run("Adds an edge into an empty graph", func(t *testing.T) {
		graph := NewAdjacencyList()
		graph.AddEdge("a", "b", EdgeOptions{})

		expected := &AdjacencyList{
			graph: map[string][]string{},
		}

		if !reflect.DeepEqual(graph, expected) {
			t.Errorf("Expected %v, got %v", expected, graph)
		}
	})

	t.Run("Adds an edge into a graph missing one vertex", func(t *testing.T) {
		graph := NewAdjacencyList().AddVertex("a")
		graph.AddEdge("a", "b", EdgeOptions{})

		expected := &AdjacencyList{
			graph: map[string][]string{
				"a": {},
			},
		}

		if !reflect.DeepEqual(graph, expected) {
			t.Errorf("Expected %v, got %v", expected, graph)
		}
	})
}

func TestRemoveEdge(t *testing.T) {
	t.Run("Removes edge from empty graph", func(t *testing.T) {
		graph := NewAdjacencyList()
		graph.RemoveEdge("a", "b", EdgeOptions{})

		expected := &AdjacencyList{
			graph: map[string][]string{},
		}

		if !reflect.DeepEqual(graph, expected) {
			t.Errorf("Expected %v, got %v", expected, graph)
		}
	})

	t.Run("Removes edge from graph with vertices but no edges", func(t *testing.T) {
		graph := NewAdjacencyList().
			AddVertex("a").
			AddVertex("b").
			RemoveEdge("a", "b", EdgeOptions{})

		expected := &AdjacencyList{
			graph: map[string][]string{
				"a": {},
				"b": {},
			},
		}

		if !reflect.DeepEqual(graph, expected) {
			t.Errorf("Expected %v, got %v", expected, graph)
		}
	})

	t.Run("Removes edge from graph with edges", func(t *testing.T) {
		graph := NewAdjacencyList().
			AddVertex("a").
			AddVertex("b").
			AddEdge("a", "b", EdgeOptions{}).
			RemoveEdge("a", "b", EdgeOptions{})

		expected := &AdjacencyList{
			graph: map[string][]string{
				"a": {},
				"b": {},
			},
		}

		if !reflect.DeepEqual(graph, expected) {
			t.Errorf("Expected %v, got %v", expected, graph)
		}
	})
}
