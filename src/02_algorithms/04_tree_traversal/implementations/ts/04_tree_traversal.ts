import { Node } from "../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";

export const depthFirstSearchInOrder = (
  node: Node | null,
  visitNode: (node: number) => void
) => {
  if (!node) return;

  depthFirstSearchInOrder(node.left, visitNode);
  visitNode(node.value);
  depthFirstSearchInOrder(node.right, visitNode);

  return;
};

export const depthFirstSearchPreOrder = (
  node: Node | null,
  visitNode: (node: number) => void
): Array<number> => {
  if (!node) return;

  visitNode(node.value);
  depthFirstSearchPreOrder(node.left, visitNode);
  depthFirstSearchPreOrder(node.right, visitNode);

  return;
};

export const depthFirstSearchPostOrder = (
  node: Node | null,
  visitNode: (node: number) => void
) => {
  if (!node) return;

  depthFirstSearchPostOrder(node.left, visitNode);
  depthFirstSearchPostOrder(node.right, visitNode);
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
