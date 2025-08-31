import { Node } from "src/01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";

export const breadthFirstSearch = (
  node: Node | null,
  visitNode: (node: number) => void
) => {
  const queue: Array<Node> = [node];

  while (queue.length > 0) {
    const node: Node = queue.shift();

    visitNode(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return;
};
