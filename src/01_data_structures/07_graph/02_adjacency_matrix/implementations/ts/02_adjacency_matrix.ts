export class AdjacencyMatrix {
  private vertices: string[];
  private matrix: Array<Array<number>>;

  constructor(vertices: string[]) {
    this.vertices = vertices;
    this.matrix = Array.from({ length: vertices.length }, () =>
      Array(vertices.length).fill(0)
    );
  }

  private getIndex(vertex: string): number {
    const index = this.vertices.indexOf(vertex);

    if (index === -1) {
      return null;
    }

    return index;
  }

  addEdge(u: string, v: string, directed: boolean = false): AdjacencyMatrix {
    const i = this.getIndex(u);
    const j = this.getIndex(v);

    this.matrix[i][j] = 1;

    if (!directed) {
      this.matrix[j][i] = 1;
    }

    return this;
  }

  removeEdge(u: string, v: string, directed: boolean = false): AdjacencyMatrix {
    const i = this.getIndex(u);
    const j = this.getIndex(v);

    this.matrix[i][j] = 0;

    if (!directed) {
      this.matrix[j][i] = 0;
    }

    return this;
  }

  getNeighbors(u: string): Array<number> {
    const i = this.getIndex(u);
    const neighbors = this.matrix[i].reduce((acc, curr, i) => {
      if (curr === 1) {
        return acc.concat(this.vertices[i]);
      }

      return acc;
    }, []);

    return neighbors;
  }
}
