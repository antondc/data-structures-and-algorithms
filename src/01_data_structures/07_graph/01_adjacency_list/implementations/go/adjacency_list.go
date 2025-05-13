package adjacency_list

type EdgeOptions struct {
	Directed bool
	Weight   int
}

type Vertex struct {
	Value  string
	Weight int
}

type AdjacencyList struct {
	graph map[string][]Vertex
}

func NewAdjacencyList() *AdjacencyList {
	return &AdjacencyList{
		graph: make(map[string][]Vertex),
	}
}

func (adjacencyList *AdjacencyList) AddVertex(u string) *AdjacencyList {
	if _, exists := adjacencyList.graph[u]; !exists {
		adjacencyList.graph[u] = []Vertex{}
	}

	return adjacencyList
}

func (adjacencyList *AdjacencyList) RemoveVertex(u string) *AdjacencyList {
	if adjacencyList.graph[u] == nil {
		return adjacencyList
	}

	for vertex, list := range adjacencyList.graph {
		newList := []Vertex{}
		for _, neighbor := range list {
			if neighbor.Value != u {
				newList = append(newList, neighbor)
			}
		}
		adjacencyList.graph[vertex] = newList
	}

	delete(adjacencyList.graph, u)

	return adjacencyList
}

func (adjacencyList *AdjacencyList) AddEdge(u string, v string, options EdgeOptions) *AdjacencyList {
	if adjacencyList.graph[u] == nil || adjacencyList.graph[v] == nil {
		return adjacencyList
	}

	adjacencyList.graph[u] = append(adjacencyList.graph[u], Vertex{Value: v, Weight: options.Weight})

	if !options.Directed {
		adjacencyList.graph[v] = append(adjacencyList.graph[v], Vertex{Value: u, Weight: options.Weight})
	}

	return adjacencyList
}

func (adjacencyList *AdjacencyList) RemoveEdge(u string, v string, options EdgeOptions) *AdjacencyList {
	if adjacencyList.graph[u] == nil || adjacencyList.graph[v] == nil {
		return adjacencyList
	}

	newAdjacencyListU := []Vertex{}
	for _, neighbor := range adjacencyList.graph[u] {
		if neighbor.Value != v {
			newAdjacencyListU = append(newAdjacencyListU, neighbor)
		}
	}
	adjacencyList.graph[u] = newAdjacencyListU

	if options.Directed {
		return adjacencyList
	}

	newAdjacencyListV := []Vertex{}
	for _, neighbor := range adjacencyList.graph[v] {
		if neighbor.Value != u {
			newAdjacencyListV = append(newAdjacencyListV, neighbor)
		}
	}
	adjacencyList.graph[v] = newAdjacencyListV

	return adjacencyList
}

func (adjacencyList *AdjacencyList) GetNeighbors(u string) []Vertex {
	return adjacencyList.graph[u]
}
