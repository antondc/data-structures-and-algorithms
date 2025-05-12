package adjacency_list

type AdjacencyList struct {
	graph map[string][]string
}

func NewAdjacencyList() AdjacencyList {
	return AdjacencyList{
		graph: make(map[string][]string),
	}
}

func (adjacencyList *AdjacencyList) AddVertex(u string) *AdjacencyList {
	if _, exists := adjacencyList.graph[u]; !exists {
		adjacencyList.graph[u] = []string{}
	}

	return adjacencyList
}
