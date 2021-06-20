/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


interface traverseTreeProps {
  grandParent: TreeNode | null;
  parent: TreeNode | null;
  node: TreeNode | null;
}

function sumEvenGrandparent(root: TreeNode | null): number {
  if (root === null) return 0;

  const treeStatus = {
    grandParent: null,
    parent: null,
    node: root
  };

  return traverseTree(treeStatus);
}

function traverseTree({
  grandParent,
  parent,
  node
}: traverseTreeProps): number {
  if (!node) return 0;

  let sum = 0;

  if (grandParent) {
    if (grandParent.val % 2 === 0) {
      sum += node.val;
    }
  }

  if (node.left) {
    sum += traverseTree({
      grandParent: parent,
      parent: node,
      node: node.left
    });
  }

  if (node.right) {
    sum += traverseTree({
      grandParent: parent,
      parent: node,
      node: node.right
    });
  }

  return sum;
}