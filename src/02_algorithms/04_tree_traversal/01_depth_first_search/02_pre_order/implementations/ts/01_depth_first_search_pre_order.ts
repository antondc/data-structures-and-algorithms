import { Node } from "../../../../../../01_data_structures/06_tree/01_binary_search_tree/implementations/ts/binary_search_tree";

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
