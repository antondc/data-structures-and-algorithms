package adjacency_list

type EdgeOptions struct {
	Directed bool
	Weight   int
}

type AdjacencyList struct {
	graph map[string][]string
}

func NewAdjacencyList() *AdjacencyList {
	return &AdjacencyList{
		graph: make(map[string][]string),
	}
}

func (adjacencyList *AdjacencyList) AddVertex(u string) *AdjacencyList {
	if _, exists := adjacencyList.graph[u]; !exists {
		adjacencyList.graph[u] = []string{}
	}

	return adjacencyList
}

func (adjacencyList *AdjacencyList) RemoveVertex(u string) *AdjacencyList {
	if adjacencyList.graph[u] == nil {
		return adjacencyList
	}

	for vertex, list := range adjacencyList.graph {
		newList := []string{}
		for _, neighbor := range list {
			if neighbor != u {
				newList = append(newList, u)
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

	adjacencyList.graph[u] = append(adjacencyList.graph[u], v)

	if !options.Directed {
		adjacencyList.graph[v] = append(adjacencyList.graph[v], u)
	}

	return adjacencyList
}

func (adjacencyList *AdjacencyList) RemoveEdge(u string, v string, options EdgeOptions) *AdjacencyList {
	if adjacencyList.graph[u] == nil || adjacencyList.graph[v] == nil {
		return adjacencyList
	}

	newAdjacencyListU := []string{}
	for _, neighbor := range adjacencyList.graph[u] {
		if neighbor != v {
			newAdjacencyListU = append(newAdjacencyListU, neighbor)
		}
	}
	adjacencyList.graph[u] = newAdjacencyListU

	if options.Directed {
		return adjacencyList
	}

	newAdjacencyListV := []string{}
	for _, neighbor := range adjacencyList.graph[v] {
		if neighbor != u {
			newAdjacencyListV = append(newAdjacencyListV, neighbor)
		}
	}
	adjacencyList.graph[v] = newAdjacencyListV

	return adjacencyList
}

func (adjacencyList *AdjacencyList) GetNeighbors(u string) []string {
	return adjacencyList.graph[u]
}
