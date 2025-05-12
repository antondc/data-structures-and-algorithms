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

func (adjacentList *AdjacencyList) RemoveEdge(u string, v string, options EdgeOptions) *AdjacencyList {
	if adjacentList.graph[u] == nil || adjacentList.graph[v] == nil {
		return adjacentList
	}

	newAdjacentListU := []string{}
	for _, adjacent := range adjacentList.graph[u] {
		if adjacent != v {
			newAdjacentListU = append(newAdjacentListU, adjacent)
		}
	}
	adjacentList.graph[u] = newAdjacentListU

	if options.Directed {
		return adjacentList
	}

	newAdjacentListV := []string{}
	for _, adjacent := range adjacentList.graph[v] {
		if adjacent != u {
			newAdjacentListV = append(newAdjacentListV, adjacent)
		}
	}
	adjacentList.graph[v] = newAdjacentListV

	return adjacentList
}
