export type Vertices = Array<string>;
export type Graph = Array<Array<number>>;
export type Distances = Array<Array<number>>;

export const floydWarshall = (graph: Graph, vertices: Vertices): Distances => {
  const distances: Distances = graph.map((row) => [...row]);

  for (const k of vertices.keys()) {
    for (const i of vertices.keys()) {
      for (const j of vertices.keys()) {
        if (distances[i][k] + distances[k][j] < distances[i][j]) {
          distances[i][j] = distances[i][k] + distances[k][j];
        }
      }
    }
  }

  return distances;
};
