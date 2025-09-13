export type Vertices<T> = Array<T>;
export type Graph = Array<Array<number>>;
export type Distances = Array<Array<number>>;
export type Next = Array<Array<number | null>>;

export const floydWarshall = <T>(
  graph: Graph,
  vertices: Vertices<T>
): { distances: Distances; next: Next } => {
  const distances: Distances = graph.map((row) => [...row]);
  const next: Next = Array.from({ length: vertices.length }, (_, i) =>
    new Array(vertices.length).fill(i)
  );

  for (let k = 0; k < vertices.length; k++) {
    for (let i = 0; i < vertices.length; i++) {
      for (let j = 0; j < vertices.length; j++) {
        if (
          distances[i][k] !== Infinity &&
          distances[k][j] !== Infinity &&
          distances[i][k] + distances[k][j] < distances[i][j]
        ) {
          distances[i][j] = distances[i][k] + distances[k][j];
          next[i][j] = next[k][j];
        }
      }
    }
  }

  return { distances, next };
};

export const reconstructPath = <T>(
  from: T,
  to: T,
  next: Next,
  vertices: Vertices<T>
): T[] => {
  const startIndex = vertices.indexOf(from);
  const endIndex = vertices.indexOf(to);
  const path: Array<T> = [to];
  let previous = endIndex;

  while (previous !== next[startIndex][previous]) {
    previous = next[startIndex][previous];
    path.unshift(vertices[previous]);
  }

  return path;
};
