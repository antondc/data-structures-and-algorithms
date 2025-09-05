export type Graph = {
  [node: string]: Array<[neighbor: string, weight: number]>;
};
type Distances = {
  [node: string]: number;
};

export const dijkstra = (graph: Graph, source: string): Distances => {
  const distances: Record<string, number> = {};
  const visited: Record<string, boolean> = {};

  for (const item in graph) {
    distances[item] = Infinity;
    visited[item] = false;
  }

  distances[source] = 0;

  // Critical point: using an array for simplicity, but a priority queue is more efficient.
  const unvisited = Object.keys(graph);

  while (unvisited.length) {
    unvisited.sort((a, b) => distances[a] - distances[b]);
    const current = unvisited.shift();
    visited[current] = true;

    for (let i = 0; i < graph[current].length; i++) {
      const [neighbor, weight] = graph[current][i];

      if (visited[neighbor] === false) {
        const new_distance = distances[current] + weight;
        if (new_distance < distances[neighbor]) {
          distances[neighbor] = new_distance;
        }
      }
    }
  }

  return distances;
};
