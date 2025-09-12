export type Vertices = Array<string>;
export type Edges = Array<[u: string, v: string, weight: number]>;

type Distances = {
  [node: string]: number;
};

export const bellmanFord = (
  edges: Edges,
  vertices: Vertices,
  source: string
): Distances => {
  const distances: Record<string, number> = {};
  for (const item of vertices) {
    distances[item] = Infinity;
  }

  distances[source] = 0;

  for (let index = 0; index < vertices.length - 1; index++) {
    for (const edge of edges) {
      const [u, v, weight] = edge;
      if (distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
      }
    }
  }

  for (const edge of edges) {
    const [u, v, weight] = edge;
    if (distances[u] + weight < distances[v]) {
      throw new Error("Negative-weight cycle detected");
    }
  }

  return distances;
};
