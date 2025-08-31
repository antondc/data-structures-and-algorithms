import { Node } from "../../../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";

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
