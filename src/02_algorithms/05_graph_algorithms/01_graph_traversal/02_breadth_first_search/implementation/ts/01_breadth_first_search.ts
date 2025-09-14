type Graph = Record<string, Array<string>>;

export const breadthFirstSearch = (
  graph: Graph,
  start: string,
  visitNode: (node: number | string) => void
) => {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();

    if (visited.has(node)) continue;

    visitNode(node);
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
};
