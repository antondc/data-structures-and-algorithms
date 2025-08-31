import { Node } from "src/01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";

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
