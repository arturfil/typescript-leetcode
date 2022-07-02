import { TreeNode } from "./TreeNode";

export class InvertBinaryTree {
    invertTree(root: TreeNode | null): TreeNode | null {
        if (root === null) return null
        let left = this.invertTree(root.left);
        let right = this.invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    }
}