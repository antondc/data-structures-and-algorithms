type Graph = Record<string, Array<string>>;

export const depthFirstSearch = (
  graph: Graph,
  start: string,
  visitNode: (node: number | string) => void
) => {
  const visited = new Set();
  const stack = [start];

  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visitNode(node);
    visited.add(node);

    for (const neighbor of graph[node].slice().reverse()) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
};
