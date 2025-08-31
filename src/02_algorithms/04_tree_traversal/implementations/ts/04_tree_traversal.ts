import { Node } from "../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";

export const dfsInOrderRecursive = (
  node: Node | null,
  result: Array<number> = []
) => {
  if (!node) return result;

  dfsInOrderRecursive(node.left, result);
  result.push(node.value);
  dfsInOrderRecursive(node.right, result);

  return result;
};

export const dfsPreOrderRecursive = (
  node: Node | null,
  result: Array<number> = []
): Array<number> => {
  if (!node) return result;

  result.push(node.value);
  dfsPreOrderRecursive(node.left, result);
  dfsPreOrderRecursive(node.right, result);

  return result;
};

export const dfsPostOrderRecursive = (
  node: Node | null,
  result: Array<number> = []
) => {
  if (!node) return result;

  dfsPostOrderRecursive(node.left, result); // Visit left
  dfsPostOrderRecursive(node.right, result); // Visit right
  result.push(node.value);

  return result;
};

export const breadthFirstSearch = (
  node: Node | null,
  result: Array<number> = []
) => {
  const queue: Array<Node> = [node];

  while (queue.length > 0) {
    const node: Node = queue.shift();

    result.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};
