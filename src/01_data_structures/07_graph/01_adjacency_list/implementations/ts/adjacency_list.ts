type Graph = Record<string, Array<Node>>;

type Node = {
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

  addEdge({
    u,
    v,
    weight = 1,
    directed = false,
  }: {
    u: string;
    v: string;
    weight?: number;
    directed?: boolean;
  }): AdjacencyList {
    if (!this.graph[u] || !this.graph[v]) {
      return this;
    }

    this.graph[u].push({ value: v, weight });

    if (!directed) {
      this.graph[v].push({ value: u, weight });
    }

    return this;
  }

  removeEdge({
    u,
    v,
    directed = false,
  }: {
    u: string;
    v: string;
    directed?: boolean;
  }): AdjacencyList {
    if (!this.graph[u] || !this.graph[v]) {
      return this;
    }

    this.graph[v] = this.graph[v].filter((item) => item.value !== u);

    if (!directed) {
      this.graph[u] = this.graph[u].filter((item) => item.value !== v);
    }

    return this;
  }

  getNeighbors(vertex: string): Array<Node> {
    return this.graph[vertex];
  }
}
