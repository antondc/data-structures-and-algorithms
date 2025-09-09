export class EdgeList {
  graph: [u: string, v: string][] = [];

  addEdge(u: string, v: string, options: { directed?: boolean } = {}): this {
    this.graph.push([u, v]);

    if (!options?.directed) {
      this.graph.push([v, u]);
    }

    return this;
  }

  removeEdge(u: string, v: string, options: { directed?: boolean } = {}): this {
    const filteredEdges = this.graph.filter((item) => {
      if (options.directed) {
        return item[0] !== u || item[1] !== v;
      }

      return (
        (item[0] !== u || item[1] !== v) && (item[0] !== v || item[1] !== u)
      );
    });
    this.graph = filteredEdges;

    return this;
  }

  getEdges(): [u: string, v: string][] {
    return this.graph;
  }
}
