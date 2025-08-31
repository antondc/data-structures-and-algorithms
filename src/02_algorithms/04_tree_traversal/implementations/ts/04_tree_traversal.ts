import { Node } from "../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";

export const dfsInOrderRecursive = (
  node: Node | null,
  visitNode: (node: number) => void
) => {
  if (!node) return;

  dfsInOrderRecursive(node.left, visitNode);
  visitNode(node.value);
  dfsInOrderRecursive(node.right, visitNode);

  return;
};

export const dfsPreOrderRecursive = (
  node: Node | null,
  visitNode: (node: number) => void
): Array<number> => {
  if (!node) return;

  visitNode(node.value);
  dfsPreOrderRecursive(node.left, visitNode);
  dfsPreOrderRecursive(node.right, visitNode);

  return;
};

export const dfsPostOrderRecursive = (
  node: Node | null,
  visitNode: (node: number) => void
) => {
  if (!node) return;

  dfsPostOrderRecursive(node.left, visitNode);
  dfsPostOrderRecursive(node.right, visitNode);
  visitNode(node.value);

  return;
};

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
