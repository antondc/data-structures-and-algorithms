type Graph = Record<string, Array<Vertex>>;

type Vertex = {
  value: string;
  weight: number;
};

export class AdjacencyList {
  graph: Graph = {};

  getGraph(): Graph {
    return this.graph;
  }

  addVertex(vertex: string): AdjacencyList {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }

    return this;
  }

  removeVertex(vertex: string): AdjacencyList {
    if (!this.graph[vertex]) {
      return this;
    }

    this.graph[vertex].forEach((item) => {
      this.graph[item.value] = this.graph[item.value].filter(
        (item) => item.value !== vertex
      );
    });

    delete this.graph[vertex];

    return this;
  }

  addEdge(
    u: string,
    v: string,
    options: { directed?: boolean; weight?: number } = {}
  ): AdjacencyList {
    if (!this.graph[u] || !this.graph[v]) {
      return this;
    }

    this.graph[u].push({ value: v, weight: options.weight });

    if (!options.directed) {
      this.graph[v].push({ value: u, weight: options.weight });
    }

    return this;
  }

  removeEdge(
    u: string,
    v: string,
    options: { directed?: boolean } = {}
  ): AdjacencyList {
    if (!this.graph[u] || !this.graph[v]) {
      return this;
    }

    this.graph[v] = this.graph[v].filter((item) => item.value !== u);

    if (!options.directed) {
      this.graph[u] = this.graph[u].filter((item) => item.value !== v);
    }

    return this;
  }

  getNeighbors(vertex: string): Array<Vertex> | null {
    if (!this.graph[vertex]) {
      return null;
    }

    return this.graph[vertex];
  }
}
